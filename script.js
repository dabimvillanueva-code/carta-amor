const envelope = document.querySelector('.envelope-wrapper');

envelope.addEventListener('click', () => {
    console.log("¡Carta abierta!");
});
const wrapper = document.querySelector('.envelope-wrapper');
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️'; 
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
wrapper.addEventListener('mouseover', () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 100); 
    }
});