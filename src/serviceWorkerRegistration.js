// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service " +
              "worker. To learn more, visit https://cra.link/PWA"
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      setInterval(() => {
        registration.update();
        console.debug("Checked for update...");
      }, 1000 * 10 * 1);

      registration.onupdatefound = () => {
        const installingWorker = registration.installing;

        if (installingWorker == null) {
          return;
        }

        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                "New content is available and will be used when all " +
                  "tabs for this page are closed. See https://cra.link/PWA."
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log("Content is cached for offline use.");

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };

      // return registration.pushManager
      //   .getSubscription()
      //   .then(async function (subscription) {
      //     // If a subscription was found, return it.
      //     if (subscription) {
      //       return subscription;
      //     }

      //     // Get the server's public key
      //     const response = await fetch(
      //       "https://push-notifications-server.onrender.com/api/v1/notifications/vapidPublicKey"
      //     );
      //     const vapidPublicKey = await response.text();

      //     // Chrome doesn't accept the base64-encoded (string) vapidPublicKey yet
      //     // urlBase64ToUint8Array() is defined in /tools.js
      //     const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

      //     // Otherwise, subscribe the user (userVisibleOnly allows to specify that we don't plan to
      //     // send notifications that don't have a visible effect for the user).
      //     return registration.pushManager.subscribe({
      //       userVisibleOnly: true,
      //       applicationServerKey: convertedVapidKey,
      //     });
      //   });
    })
    .then(function (subscription) {
      // Send the subscription details to the server using the Fetch API.
      // fetch("./register", {
      //   method: "post",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     subscription: subscription,
      //   }),
      // });
      // document.getElementById("doIt").onclick = function () {
      //   // const payload = document.getElementById("notification-payload").value;
      //   // const delay = document.getElementById("notification-delay").value;
      //   // const ttl = document.getElementById("notification-ttl").value;
      //   // Ask the server to send the client a notification (for testing purposes, in actual
      //   // applications the push notification is likely going to be generated by some event
      //   // in the server).
      //   const mySubscription = subscription.toJSON();
      //   console.log("Parsed subscription", mySubscription);
      //   const notificationDto = {
      //     // subscription: subscription,
      //     // payload: payload,
      //     // delay: delay,
      //     // ttl: ttl,
      //     endpoint: mySubscription.endpoint,
      //     p256dh: mySubscription.keys.p256dh,
      //     auth: mySubscription.keys.auth,
      //   };
      //   fetch(
      //     "https://push-notifications-server.onrender.com/api/v1/notifications/send-notification",
      //     {
      //       method: "post",
      //       headers: {
      //         "Content-type": "application/json",
      //       },
      //       body: JSON.stringify(notificationDto),
      //     }
      //   );
      // };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { "Service-Worker": "script" },
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

function urlBase64ToUint8Array(base64String) {
  var padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
