// THIS FILE SHOULD NOT BE VERSION CONTROLLED
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const worker of registrations) {
        console.log('Service worker:', worker)
      }

    });
  }
self.addEventListener('install', function(){
  console.log('SW Installed');
});
self.addEventListener('activate', function(){
  console.log('SW Activate');
})