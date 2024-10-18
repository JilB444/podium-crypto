document.querySelectorAll('.podium-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Vous avez cliqué sur ${item.querySelector('.content').textContent}`);
    });
});
