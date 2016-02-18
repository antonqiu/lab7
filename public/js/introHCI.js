'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

$(".likeBtn").click(function(e) {
    console.log("like clicked");
    ga('send', 'event', 'like', 'click');
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}