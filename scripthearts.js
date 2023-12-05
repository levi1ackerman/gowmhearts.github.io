document.addEventListener('DOMContentLoaded', function () {
    createRaindrops();
});

const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

function createRaindrops() {
    const numRaindrops = 30;
    const body = document.body;

    for (let i = 0; i < numRaindrops; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        const size = Math.random() * 30 + 10; // Random size between 10 and 20
        raindrop.style.width = size + 'px';
        raindrop.style.height = size + 'px';

        const startPosition = Math.random() * window.innerWidth;
        const animationDuration = Math.random() * 2 + 3; // Random duration between 3 and 5 seconds
        raindrop.style.animationDuration = animationDuration + 's';

        raindrop.style.left = startPosition + 'px';

        body.appendChild(raindrop);
    }

    
    
}
