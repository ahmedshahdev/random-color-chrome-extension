function setRandomIcon() {
    var iconUrls = [
      'icon.png',
      'icon2.png',
    ];

    var randomIndex = Math.floor(Math.random() * iconUrls.length);
    var randomIconUrl = chrome.runtime.getURL(iconUrls[randomIndex]);
  
    chrome.action.setIcon({
      path: randomIconUrl
    });
  }
  
  setRandomIcon();
  