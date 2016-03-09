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
