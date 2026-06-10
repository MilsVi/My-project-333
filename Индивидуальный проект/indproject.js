
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
slides.forEach(slide => slide.classList.remove('active'));
slides[index].classList.add('active');
}

function nextSlide() {
currentSlide = (currentSlide + 1) % totalSlides;
showSlide(currentSlide);
}

        
setInterval(nextSlide, 6000);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Сообщение отправлено! Скоро вы получите обратную связь.');
        form.reset(); 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const headerUl = document.querySelector('.header-ul');
    const headerLinks = document.querySelectorAll('.header-ul a');
    
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        headerUl.classList.toggle('active');
        document.body.style.overflow = burger.classList.contains('active') ? 'hidden' : '';
    });
    
    headerLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            headerUl.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header nav') && headerUl.classList.contains('active')) {
            burger.classList.remove('active');
            headerUl.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});