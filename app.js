// Register service worker if browser supports it.
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
};