import React, { useEffect, useState } from 'react';

function AddToHomeScreen() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleAddToHomeScreen = async () => {
    if (deferredPrompt) {
      // Update the start_url in the manifest
      const manifestLink = document.querySelector('link[rel="manifest"]');
      const response = await fetch(manifestLink.href);
      const manifest = await response.json();
      manifest.start_url = window.location.href;
      
      const blob = new Blob([JSON.stringify(manifest)], {type: 'application/json'});
      const manifestURL = URL.createObjectURL(blob);
      manifestLink.setAttribute('href', manifestURL);

      // Prompt the user
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      setDeferredPrompt(null);
    }
  };

  if (!deferredPrompt) return null;

  return (
    <button onClick={handleAddToHomeScreen}>
      Add to Home Screen
    </button>
  );
}

export default AddToHomeScreen;