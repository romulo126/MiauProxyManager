chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.get(['profiles'], function(result) {
    if (result.profiles && result.profiles.length > 0) {
      const activeProfile = result.profiles[0];
      chrome.proxy.settings.set(
        {
          value: {
            mode: "fixed_servers",
            rules: {
              singleProxy: {
                scheme: "http",
                host: activeProfile.host,
                port: parseInt(activeProfile.port)
              }
            }
          },
          scope: "regular"
        },
        function() {
          console.log('Proxy set to ' + activeProfile.host + ':' + activeProfile.port);
          
        }
      );
    }
  });
});
