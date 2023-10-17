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
        //     "https://push-notifications-server.onrender.com/api/v1/notifications/send-notification",
        //     {
        //       method: "post",
        //       headers: {
        //         "Content-type": "application/json",
        //       },
        //       body: JSON.stringify(notificationDto),
        //     }
        //   );
        // }}
        id="doIt"
      >
        Click
      </button>
    </div>
  );
}

export default App;
