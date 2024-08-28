function loadProfiles() {
  chrome.storage.local.get(['profiles'], function(result) {
    const profileSelect = document.getElementById('profileSelect');
    profileSelect.innerHTML = '';
    if (result.profiles) {
      result.profiles.forEach((profile, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = profile.name;
        profileSelect.add(option);
      });
    }
  });
}

document.getElementById('addProfile').addEventListener('click', function() {
  const name = document.getElementById('proxyName').value;
  const host = document.getElementById('proxyHost').value;
  const port = document.getElementById('proxyPort').value;
  const color = document.getElementById('proxyColor').value;

  if (name && host && port) {
    chrome.storage.local.get(['profiles'], function(result) {
      const profiles = result.profiles || [];
      profiles.push({ name, host, port });
      chrome.storage.local.set({ profiles }, function() {
        loadProfiles();
      });
    });
  }
});

document.getElementById('activateProfile').addEventListener('click', function() {
  const profileSelect = document.getElementById('profileSelect');
  const selectedIndex = profileSelect.selectedIndex;
  if (selectedIndex >= 0) {
    
    chrome.storage.local.get(['profiles'], function(result) {

    const profile = result.profiles[selectedIndex];
    chrome.action.setBadgeText({ text: profile.name });
    chrome.action.setBadgeBackgroundColor({ color: profile.color });
      chrome.proxy.settings.set(
        {
          value: {
            mode: "fixed_servers",
            rules: {
              singleProxy: {
                scheme: "http",
                host: profile.host,
                port: parseInt(profile.port)
              }
            }
          },
          scope: "regular"
        },
        function() {
          console.log('Proxy set to ' + profile.host + ':' + profile.port);
        }
      );
    });
  }
});

document.getElementById('deleteProfile').addEventListener('click', function() {
  const profileSelect = document.getElementById('profileSelect');
  const selectedIndex = profileSelect.selectedIndex;
  if (selectedIndex >= 0) {
    chrome.storage.local.get(['profiles'], function(result) {
      const profiles = result.profiles;
      profiles.splice(selectedIndex, 1);
      chrome.storage.local.set({ profiles }, function() {
        loadProfiles();
      });
    });
  }
});

document.getElementById('disableProxy').addEventListener('click', function() {
  chrome.proxy.settings.clear({ scope: 'regular' }, function() {
    chrome.action.setBadgeText({ text: '' });
  });
});
document.getElementById('addProfile').addEventListener('click', function() {
  const name = document.getElementById('proxyName').value;
  const host = document.getElementById('proxyHost').value;
  const port = document.getElementById('proxyPort').value;
  const color = document.getElementById('proxyColor').value;

  if (name && host && port && color) {
    chrome.storage.local.get(['profiles'], function(result) {
      const profiles = result.profiles || [];
      profiles.push({ name, host, port, color });
      chrome.storage.local.set({ profiles }, function() {
        loadProfiles();
      });
    });
  }
});
loadProfiles();
