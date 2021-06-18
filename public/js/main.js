let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('navbarToggle');

navBarToggle.addEventListener('click', function (){
    mainNav.classList.toggle('active');
    console.log("test");
});
