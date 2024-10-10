document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const closeToggle = document.querySelector(".close-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
    closeToggle.addEventListener("click", function() {
        navLinks.classList.remove("show");
    });
});



let slideIndex = 1;
        showSlides(slideIndex);
        function changeSlide(n) {
            showSlides(slideIndex += n);
        }
        function showSlides(n) {
            let slides = document.getElementsByClassName("carousel-slide");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            slides[slideIndex-1].classList.add("active");
        }
        setInterval(() => {
            changeSlide(1);
        }, 5000);


const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.querySelector('input[placeholder="Your Name"]');
    const email = document.querySelector('input[placeholder="Your Email"]');
    const mobile = document.querySelector('input[placeholder="Your Mobile"]');
    const serviceType = document.querySelector('select');

    
    if (!name.value.trim()) {
        alert('Please enter your name.');
        return;
    }

    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validateMobile(mobile.value)) {
        alert('Please enter a valid mobile number.');
        return;
    }

    if (!serviceType.value) {
        alert('Please select a service type.');
        return;
    }

   
    alert('Form submitted successfully!');
    form.reset(); 
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validateMobile(mobile) {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
}


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
