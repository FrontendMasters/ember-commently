export function initialize(/* app */) {
  // if (typeof FastBoot === 'undefined') {
  //   let geo = navigator.geolocation;
  //   if (geo) { // Skip this part for PhantomJS
  //     app.deferReadiness();
  //     geo.getCurrentPosition((pos) => {
  //       let pt = pos.coords;
  //       let loc = {
  //         lat: pt.latitude,
  //         lng: pt.longitude
  //       };
  //       app.register('data:location', loc, {
  //         instantiate: false
  //       });
  //       app.advanceReadiness();
  //     });
  //   }
  // }
}

export default {
  name: 'geo',
  initialize
};
