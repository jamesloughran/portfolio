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

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "jamescrazen@gmail.com",
        Password : "Locker88$$",
        To : 'james.loughran595@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: "+ document.getElementById("name").value + "<br> Email: "+ document.getElementById('email').value
        + "<br> Message: "+ document.getElementById('message').value
    }).then(
      message => alert('Message sent successfully')
    );
}