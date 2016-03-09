// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
// _gaq.push(['_trackPageview']);
//
// (function() {
//   var ga = document.createElement('script');
//   ga.type = 'text/javascript';
//   ga.async = true;
//   ga.src = 'https://ssl.google-analytics.com/ga.js';
//   var s = document.getElementsByTagName('script')[0];
//   s.parentNode.insertBefore(ga, s);
// })();

console.log('consoling');

chrome.browserAction.onClicked.addListener(function(tab) {

  // attempting to change the JSON output to just a string.  not working
  var Options = function() {};
  Options.prototype.toString = function() {
    return ' -url ' + tab.url;
  };
  var options = new Options();
  console.log('options', options);
  chrome.runtime.sendNativeMessage('org.mozilla.firefox.nightly',
  options,
  function(response) {
    console.log('response');
    console.log(response);
  });
});

chrome.contextMenus.onClicked.addListener(function onClickHandler(info, tab) {
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
});

// Set up context menus at install time.
chrome.runtime.onInstalled.addListener(function() {

  chrome.contextMenus.create({"title": "Open Link in Firefox",
                              "contexts": ["link"], "id": "open-link-fx"},
  function() {
    if (chrome.runtime.lastError) {
      console.log("open-link-fx error: " + chrome.runtime.lastError.message);
    }
  });


  chrome.contextMenus.create({"title": "Open Page in Firefox", "contexts":["page"], "id": "open-page-fx"},
  function() {
    if (chrome.runtime.lastError) {
      console.log("open-page-fx error: " + chrome.runtime.lastError.message);
    }
  });

  chrome.contextMenus.create({"title": "Open Image in Firefox", "contexts":["image"], "id": "open-image-fx"},
  function() {
    if (chrome.runtime.lastError) {
      console.log("open-image-fx error: " + chrome.runtime.lastError.message);
    }
  });

  chrome.contextMenus.create({"title": "Open Video in Firefox", "contexts":["video"], "id": "open-video-fx"},
  function() {
    if (chrome.runtime.lastError) {
      console.log("open-video-fx error: " + chrome.runtime.lastError.message);
    }
  });

  chrome.contextMenus.create({"title": "Open Audio in Firefox", "contexts":["audio"], "id": "open-audio-fx"},
  function() {
    if (chrome.runtime.lastError) {
      console.log("open-audio-fx error: " + chrome.runtime.lastError.message);
    }
  });

});
