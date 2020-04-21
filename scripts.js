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

function resizeImagesPage(x) {
    // Get the elements with class="column"
    var elements = document.getElementsByClassName("column");

    // Declare a loop variable
    var i;
    if (x.matches){
        for (i = 0; i < elements.length; i++) {
            elements[i].style.msFlex = "100%";  // IE10
            elements[i].style.flex = "100%";
        }    
    }
    else{
        for (i = 0; i < elements.length; i++) {
            elements[i].style.msFlex = "33%";  // IE10
            elements[i].style.flex = "33%";
        }
    }
}


// When the user scrolls down 20px from the top of the document, show the button
function scrollCheck() {
    var topButton = document.getElementById("topButton")
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function gotoTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

