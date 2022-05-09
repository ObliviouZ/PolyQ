// Variables for back to top button

var btt = document.getElementById("back-to-top"), // Add ID to 'back-to-top' to button
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight;
    isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

if (docHeight != 'undefined'){
    offsetHeight = docHeight / 4;
}

// Add event listener

window.addEventListener ("scroll", function(event){
    scrollPos = body.scrollTop || docElem.scrollTop; // Various browsers

    btt.className = (scrollPos > offset) ? 'visible' : "";
});

// Click event listener

btt.addEventListener("click", function(event){
    event.preventDefault();

    if (isFirefox) {
        docElem.scrollTop = 0;
    } else{
        body.scrollTop = 0;

}
})
