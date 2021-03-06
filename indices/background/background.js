let init = function() {
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;

    window.ga('create', 'UA-109825707-3', 'auto');
    window.ga('set', 'checkProtocolTask', null);
    window.ga('send', 'pageview', 'background');
}

chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
    if (req.message === 'event') {
        window.ga('send', 'event', req.eventCategory, req.eventAction, req.eventLabel, req.eventValue);
    }
});

init();