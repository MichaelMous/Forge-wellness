
function toggleTheme() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    body.classList.toggle('light-mode');
    modeIcon.innerHTML = body.classList.contains('light-mode') ? "☀️" : "🌙";
}


function calculateAndRedirect() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;

    if (!w || !h || !gender) {
        return alert("Please fill in Gender, Weight and Height!");
    }
    
    
    window.location.href = `diet-results.html?gender=${gender}&w=${w}&h=${h}`;
}


const veganCard = document.getElementById('vegan-card');
const leavesContainer = document.querySelector('.leaves-container');
let veganInterval;

if (veganCard && leavesContainer) {
    veganCard.addEventListener('mouseenter', () => {
        veganInterval = setInterval(() => {
            const leaf = document.createElement('div');
            leaf.className = 'leaf';
            leaf.style.left = Math.random() * 100 + '%';
            leaf.style.bottom = '0px';
            leaf.style.background = ['#4CAF50', '#8BC34A', '#2E7D32'][Math.floor(Math.random() * 3)];
            leavesContainer.appendChild(leaf);
            setTimeout(() => leaf.remove(), 3000);
        }, 200);
    });
    veganCard.addEventListener('mouseleave', () => clearInterval(veganInterval));
}


let currentGoal = 'loss'; 

function openStandardModal(goal) {
    currentGoal = goal;
    document.getElementById('data-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('data-modal').style.display = 'none';
}

function submitData() {
    const gender = document.getElementById('modal-gender').value;
    const w = document.getElementById('modal-weight').value;
    const h = document.getElementById('modal-height').value;
    
    if (!w || !h || !gender) {
        return alert("Please fill in all the fields!");
    }
    
    if (currentGoal === 'loss') {
        window.location.href = `weight-loss.html?gender=${gender}&w=${w}&h=${h}`;
    } else {
        
        window.location.href = `diet-results.html?gender=${gender}&w=${w}&h=${h}&goal=mass`;
    }
}


function openPlantModal() {
    document.getElementById('plant-modal').style.display = 'flex';
}

function closePlantModal() {
    document.getElementById('plant-modal').style.display = 'none';
}

function submitPlantDataForm() {
    const cat = document.getElementById('plant-cat').value;
    const gender = document.getElementById('plant-gender').value;
    const w = document.getElementById('plant-weight').value;
    const h = document.getElementById('plant-height').value;
    const goal = document.getElementById('plant-goal').value;
    
    if (!cat || !gender || !w || !h || !goal) {
        return alert("Please fill in all the fields (Type, Gender, Weight, Height and Goal)!");
    }
    
    
    window.location.href = `vegan-veg-results.html?cat=${cat}&gender=${gender}&w=${w}&h=${h}&goal=${goal}`;
}




function submitData() {
    const gender = document.getElementById('modal-gender').value;
    const w = document.getElementById('modal-weight').value;
    const h = document.getElementById('modal-height').value;
    
    if (!w || !h || !gender) {
        return alert("Please fill in all the fields!");
    }
    
    if (currentGoal === 'loss') {
        window.location.href = `weight-loss.html?gender=${gender}&w=${w}&h=${h}`;
    } else {
        
        window.location.href = `muscle-gain-results.html?gender=${gender}&w=${w}&h=${h}`;
    }
}