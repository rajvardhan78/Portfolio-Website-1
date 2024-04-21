function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

function moveCursor(e){
    let cursor = document.querySelector('.spotlight');
    cursor.style.left = e.clientX+'px';
    cursor.style.top = e.clientY+'px';

    console.log(e);
}


document.getElementById("scrollabout").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    window.scrollTo({
        top: 1000,
        behavior: 'smooth' // Smooth scrolling
    });
});



$(document).ready(function(){
    // Add smooth scrolling to About link
    $("#scrollabout").on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Using jQuery's animate() method to add smooth page scroll to 1000 pixels
        $('html, body').animate({
            scrollTop: 1000
        }, 500);
    });
});

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting){
//             entry.target.classList.add('header .content h1::after');
//         }else{
//             entry.target.classList.remove('header .content h1::after');
//         }
//     });
// });
// const hiddenElements = document.querySelector('header .content h1::before');
// hiddenElements.forEach((el) => observer.observe(el));

