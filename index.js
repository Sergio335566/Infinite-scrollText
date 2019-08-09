document.addEventListener('DOMContentLoaded', function () {
    init();
})

function init() {
    'use strict';
    var container = document.querySelector('.js-container');
    var text = container.querySelector('.js-text');
    var texts = container.querySelector('.js-text span');
    for (var i = 0; i < 20; i++) {
        var textsCloned = texts.cloneNode(true)
        text.appendChild(textsCloned)
    }
    var textCloned = text.cloneNode(true)
    container.appendChild(textCloned)
    TweenMax.to('.js-text', 20, {x: -text.offsetWidth, repeat:-1, ease:Linear.easeNone});
}
