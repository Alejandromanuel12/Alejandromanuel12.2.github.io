document.getElementById('continue-btn').addEventListener('click', function() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
});

document.getElementById('accept-btn').addEventListener('click', function() {
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('poem-screen').classList.remove('hidden');
});

document.getElementById('decline-btn').addEventListener('click', function() {
    alert('¡Espero que reconsideres! 😊');
});