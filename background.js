chrome.commands.onCommand.addListener(function(command) {
    if (command === 'open_extension') {
      chrome.windows.create({
        url: chrome.runtime.getURL('popup.html'),
        type: 'popup',
        width: 400,
        height: 600
      });
    }
  });

//   var iconUrls = [
//     'icon.png',
//     'icon2.png',
//   ];
  
//   function setRandomIcon() {
//     var randomIndex = Math.floor(Math.random() * iconUrls.length);
//     var randomIconUrl = chrome.runtime.getURL(iconUrls[randomIndex]);
  
//     chrome.action.setIcon({
//       path: randomIconUrl
//     });
//   }
  
//   chrome.tabs.onActivated.addListener(function(activeInfo) {
//     setRandomIcon();
//   });
  
//   chrome.windows.onFocusChanged.addListener(function(windowId) {
//     if (windowId !== chrome.windows.WINDOW_ID_NONE) {
//       setRandomIcon();
//     }
//   });
  