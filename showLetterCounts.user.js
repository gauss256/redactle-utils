// ==UserScript==
// @name         showLetterCounts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Display letter count of Redactle-redacted words
// @author       gauss256
// @match        https://www.redactle.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=redactle.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let redacts = document.getElementsByClassName("baffled");
    for (let i = 0; i < redacts.length; i++) {
        let redact = redacts[i];
        let count = redact.innerHTML.length;
        let idxStart = count.toString().length;
        let ihOld = redact.innerHTML.substring(idxStart);
        let ihNew = `<span style="color: #606060">${count}</span>${ihOld}`;
        redact.innerHTML = ihNew;
    }
})();