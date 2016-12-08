export function initialize(app) {
    let fbService = app.lookup('service:fastboot');
    let shoebox = fbService.get('shoebox');
    let shoeboxStore = shoebox.retrieve('request-data');
    let ua = null;
    // If rendering on fastboot server, make the request
    if (fbService.get('isFastBoot')) {
        let headers = fbService.get('request.headers');
        ua = headers.get('user-agent');
        console.log('USER AGENT: ', ua);
        app.register('data:request', {
            userAgent: ua
        }, {
            instantiate: false
        });
        if (!shoeboxStore) { // Lazily create the store
            shoeboxStore = {};
            shoebox.put('request-data', shoeboxStore);
        }
        shoeboxStore.userAgent = ua;
    } else if (shoeboxStore) {
        // rendering on client, having been served w/ fastboot
        ua = shoeboxStore.userAgent;
        app.register('data:request', {
            userAgent: ua
        }, {
            instantiate: false
        });
    } // else do nothing. No UA possible w/ static hosting
}

export default {
    name: 'request-info',
    initialize
};