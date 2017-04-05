export function initialize(appInstance) {
  let fbService = appInstance.lookup('service:fastboot');
  // Get the shoebox, and the shoebox store we want
  if (!fbService) {
    return;
  }
  let shoebox = fbService.get('shoebox');
  let shoeboxStore = shoebox.retrieve('request-data');
  let ua = null;
  if (fbService.get('isFastBoot')) {
    let headers = fbService.get('request.headers');
    ua = headers.get('user-agent');
    if (!shoeboxStore) { // Lazily create the store
      shoeboxStore = {};
      shoebox.put('request-data', shoeboxStore);
    }
    shoeboxStore.userAgent = ua;
  } else if (shoeboxStore) {
    // rendering on client, having been served w/ fastboot
    ua = shoeboxStore.userAgent;
  }
  // else do nothing. No UA possible with static hosting

  if (ua) {
    appInstance.register('data:request', {
      userAgent: ua
    }, {
      instantiate: false
    });
  }
}

export default {
  name: 'request-info',
  initialize
};
