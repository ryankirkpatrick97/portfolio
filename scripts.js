//Get the lightbox and overlay img
var lBox = document.getElementById("lightbox");
var overlayImg = document.getElementById("overlay_img");

//OnClicks
lBox.onclick = function (e) {
    var ev = e || window.event;
    if(e.target !== this)
        return;
    // Remove modal
    lBox.style.display = "none";
}

function showLightbox(t){    
    lBox.style.display = "inline-block";
    overlayImg.src = t.src;
}