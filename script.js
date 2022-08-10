// nav toggle

const navToggle = document.querySelector('.nav-toggle');
const navLniks = document.querySelectorAll('.nav-links')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLniks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// about me pop up

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});


// connect section

// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "jamescrazen@gmail.com",
//         Password : "Locker88$$",
//         To : 'james.loughran595@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : "New Contact Form Enquiry",
//         Body : "Name: "+ document.getElementById("name").value + "<br> Email: "+ document.getElementById('email').value
//         + "<br> Message: "+ document.getElementById('message').value
//     }).then(
//       message => alert('Message sent successfully')
//     );
// }

// back to top button

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.pageYOffset > 500) { //show backToTopButton
        if(!backToTopButton.classList.contains("btnEntrance")){
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
        

    }
    else{ // hide button
        if(backToTopButton.classList.contains("btnEntrance")){
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 250);
            
        }
        
    }
}

backToTopButton.addEventListener('click', smoothScrollBackToTop);

// function backToTop(){
//     window.scrollTo(0,0);
// }

// scroll behavior smooth

function smoothScrollBackToTop(){
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp){
        if(!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOuyCubic(progress, startPosition, distance, duration));
        if(progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOuyCubic(t, b, c, d){
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
}