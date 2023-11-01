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
      {showReload && waitingWorker && <p>Update Available</p>}

      {showReload && waitingWorker && (
        <button onClick={reloadPage} id="doIt">
          Refresdff
        </button>
      )}
    </div>
  );
}

export default App;
