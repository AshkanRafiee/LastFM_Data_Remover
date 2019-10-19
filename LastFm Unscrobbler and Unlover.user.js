// ==UserScript==
// @name         LastFm Unscrobbler and Unlover
// @namespace    https://ashkanrafiee.ir/
// @version      0.1
// @description  Last FM Unscrobbler and Unlover
// @author       AshkanRafiee
// @match        https://www.last.fm/user/YOURUSERHERE/*
// @grant        none
// ==/UserScript==

(function() {
window.location.replace('https://www.last.fm/user/YOURUSERHERE/loved');
    //unlove
jQuery('button[class^="toggle-button chartlist-love-button"]').each(function(_, b) {
  b.click();
  });

window.location.replace('https://www.last.fm/user/YOURUSERHERE/library/');
    //unscrobble
  jQuery('button.dropdown-menu-clickable-item[data-ajax-form-sets-state=deleted]').each(function(_, b) {
  b.click();
});
})();