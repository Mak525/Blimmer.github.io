let score = 0;
let fuel = 100;

function createPlane() {
    const planeContainer = document.querySelector('.plane-container');
    const plane = document.createElement('div');
    plane.classList.add('plane');
    
    plane.style.top = `${Math.random() * 80}%`;
    plane.style.left = `${Math.random() * 90}%`;
    
    planeContainer.appendChild(plane);

    plane.addEventListener('click', () => {
        score += 10;
        fuel -= 5;
        document.getElementById('score').textContent = score;
        document.getElementById('fuel').textContent = fuel;
        
        plane.remove();
    });
    
    setTimeout(() => {
        if (document.body.contains(plane)) {
            plane.remove();
        }
    }, 3000);
}

function startGame() {
    setInterval(() => {
        if (fuel > 0) {
            createPlane();
        } else {
            alert('Гру закінчено! Ваш рахунок: ' + score);
            location.reload();
        }
    }, 1000);
}

window.onload = startGame;
