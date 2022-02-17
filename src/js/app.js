// Get the modal
var modal = document.getElementById('openModal');

var modalImage = document.getElementById('myModalImage');

// Get the button that opens the modal
var modalBtn = document.getElementById("modal");

// Get the <span> element that closes the modal
var modalSpan = document.getElementsByClassName("close")[0];

// Get the image and insert it inside the modal
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img02");

img.onclick = function(){
    modalImage.style.display = "block";
    modalImg.src = this.src;
}

// When the user clicks on <span> (x), close the modal
modalImage.onclick = function() {
    img02.className += "out";
    setTimeout(function() {
       modalImage.style.display = "none";
       img02.className = "modal-content";
     }, 400);
    
 }


// When the user clicks the button, open the modal 
modalBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modalSpan.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}