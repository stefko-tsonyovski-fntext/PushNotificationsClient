import { useEffect } from "react";
import "./App.css";
import { useServiceWorker } from "./hooks/useServiceWorker";

function App() {
  const { waitingWorker, showReload, reloadPage } = useServiceWorker();
  // decides when to show the toast
  useEffect(() => {
    if (showReload && waitingWorker) {
      console.log("Update is available");
      // showToast({
      //   description: (
      //     <div>
      //       A new version of this page is available
      //       <button onClick={() => reloadPage()}>REFRESH</button>
      //     </div>
      //   ),
      // });
    } //else closeToast();
  }, [waitingWorker, showReload, reloadPage]);

  return (
    <div className="App">
      <button
        // onClick={() => {
        //   const notificationDto = {
        //     // subscription: subscription,
        //     // payload: payload,
        //     // delay: delay,
        //     // ttl: ttl,
        //     endpoint: "subscription.endpoint",
        //     p256dh: "p256dh",
        //     auth: "auth",
        //   };

        //   fetch(
        //     "https://push-notifications-server.onrender.com/api/v1/notifications/vapidPublicKey"
        //   )
        //     .then((res) => console.log(res))
        //     .catch((err) => console.error(err));
        // }}
        id="doIt"
      >
        Reload
      </button>
    </div>
  );
}

export default App;
