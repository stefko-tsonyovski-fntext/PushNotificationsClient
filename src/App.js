import React from "react";
import "./App.css";

function App() {
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
        Click
      </button>
    </div>
  );
}

export default App;
