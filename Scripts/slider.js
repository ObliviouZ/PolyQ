// HTML instructions:
// Create  a ul with id=slider
// Every <li> item should have class = slide.




var slides = document.getElementsByClassName("slide"),
    slider = document.getElementsById("slider"),
    cursor = 0,
    slideWidth = 0,
    topHeight = 0,
    slideCount = slides.length;

if (slideCount > 0){
    // Getting slide width
    slideWidth = slides[0].offsetWidth;
    // Set proper left side value for each slide
    for (var i = 0; i < slideCount; i++){
        slides[i].style.left = slideWidth * i + "px";
    }
    calculateTallestSlide();

    // Add animated class to each slide
    for (i=0; i < slideCount; i++){
        slides[i].classList.add("animated");
    }
    //Add event listener to next button - ID = next
    document.getElementsById('next').addEventListener("click", function(event){
        event.preventDefault();

        if (cursor < slideCount -1){
            moveSlides('forward');
            cursor++;
        }
    });
    //Add event listener to previous button - ID = prev
    document.getElementsById('prev').addEventListener("click", function(event){
        event.preventDefault();

        if (cursor > 0){
            moveSlides('backward');
            cursor--;
        }
    });
    //Add event listener for window resize
    window.addEventListener("resize", function() {
        //Get the new slide width
        slideWidth = slides[0].offsetWidth;

        //Recalculate the left position of the slides
        for (i=0; i < slides.length; i++){
            if (i <= cursor){
                slides[i].style.left = "-" + slideWidth * (cursor - i) + "px";
            } else if (i > cursor){
                slides[i].style.left = slideWidth * (i - cursor) + "px";
            }
        }
        calculateTallestSlide();
    });
}



// Needed functions
function calculateTallestSlide(){
    for (var i = 0; i < slideCount; i++){
        if (slides[i].offsetHeight > topHeight){
            topHeight = slides[i].offsetHeight;
        }
    }
    slide.style.height = topHeight + "px";
}


function moveSlides(direction){
    for (var j = 0; j < slides.length; j++){
        if (direction == "backward"){
            slides[j].style.left = +slides[j].style.left.replace(/[^-\d\.]/g, '')+ slideWidth + "px";
        } else if (direction == "forward"){
            slides[j].style.left = +slides[j].style.left.replace(/[^-\d\.]/g, '') - slideWidth + "px";
        }
    }
}
