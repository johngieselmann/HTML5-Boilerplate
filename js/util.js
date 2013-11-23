/**
 * A utility object literal class that (gasp) is in the global scope. It 
 * contains some common checks and actions I like to use without relying 
 * on plugins.
 *
 * @author JohnG <john.gieselmann@gmail.com>
 */
var jgUtil = {

    // browser checks
    isOpera: win.opera && opera.buildNumber,

    isWebKit: /WebKit/.test(ua),

    isIE: !jgUtil.isWebKit && !jgUtil.isOpera && (/MSIE/gi).test(ua) 
        && (/Explorer/gi).test(na.appName),

    isIE6: jgUtil.isIE && /MSIE [56]/.test(ua),

    isIE7: jgUtil.isIE && /MSIE [7]/.test(ua),

    isIE8: jgUtil.isIE && /MSIE [8]/.test(ua),

    isIE9: jgUtil.isIE && /MSIE [9]/.test(ua),

    isGecko: !jgUtil.isWebKit && /Gecko/.test(ua),

    isMac: ua.indexOf('Mac') != -1,

    isAir: /adobeair/i.test(ua),

    isIDevice: /(iPad|iPhone)/.test(ua),

    isIOS5: jgUtil.isIDevice && ua.match(/AppleWebKit\/(\d*)/)[1]>=534

};

/**
 * No console log?? No problem.
 *
 * @author JohnG <john.gieselmann@gmail.com>
 */
if (typeof console === undefined) {
    var console = {
        log:   function(input) { alert("THIS BROWSER HAS NO CONSOLE"); }
        warn:  function(){}
        error: function(){}
    };
}
