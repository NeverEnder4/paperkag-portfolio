const registerServiceWorker = () => {
  // check to see if service worker API is available
  if ('serviceWorker' in navigator) {
    // register on page load
    window.addEventListener('load', () => {
      // register service worker with root domain scope
      navigator.serviceWorker.register('/sw.js').then(
        registration => {
          // successful registration
          // console.log(
          //   `ServiceWorker registration successful with scope: ${
          //     registration.scope
          //   }`,
          // );
        },
        err => {
          // registration failed!
          console.log(`ServiceWorker registration failed: ${err}`);
        },
      );
    });
  }
};

export default registerServiceWorker;
