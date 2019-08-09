document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var scrollDiv = document.querySelector('.js-scroll'),
        content = scrollDiv.querySelector('.js-text'),
        span = content.querySelector('span'),
        i,
        spanCloned,
        contentCloned;
    for (i = 0; i < 20; i += 1) {
        spanCloned = span.cloneNode(true);
        content.appendChild(spanCloned);
    }
    contentCloned = content.cloneNode(true);
    scrollDiv.appendChild(contentCloned);
    TweenMax.to('.js-text', 20, { x: -content.offsetWidth, repeat:-1, ease:Linear.easeNone });
});
