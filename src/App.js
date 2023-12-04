import { useEffect } from "react";
import "./App.css";
import { useServiceWorker } from "./hooks/useServiceWorker";
import toast, { Toaster } from "react-hot-toast";
import UpdatedAlert from "./UpdatedAlert";

function App() {
  const { waitingWorker, showReload, reloadPage } = useServiceWorker();

  // decides when to show the toast
  useEffect(() => {
    if (showReload && waitingWorker) {
      console.log("Update is available");

      toast((to) => <UpdatedAlert refreshHandler={reloadPage} />, {
        duration: Infinity,
      });
    }
  }, [waitingWorker, showReload, reloadPage]);

  return (
    <div className="App">
      <h1>Hello from PWA!</h1>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{
          style: {
            width: "100%",
            marginBottom: "50px",
          },
        }}
      />
    </div>
  );
}

export default App;
