import React, { useEffect, useState } from "react";

function AddToHomeScreen() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleAddToHomeScreen = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      }
      setDeferredPrompt(null);
    }
  };

  if (!deferredPrompt) return null;

  return <button onClick={handleAddToHomeScreen}>Add to Home Screen</button>;
}

export default AddToHomeScreen;
