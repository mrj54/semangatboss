document.getElementById('nextButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    if (name) {
        document.getElementById('message').textContent = `Hai ${name}, semangat ya! Kamu hebat, cantik, dan pintar. Aku yakin kamu bisa mencapai semua impianmu. Jangan menyerah, karena kamu luar biasa!`;
        document.getElementById('page1').classList.add('hidden');
        document.getElementById('page2').classList.remove('hidden');
    } else {
        alert('Mohon isi nama terlebih dahulu.');
    }
});

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
});
