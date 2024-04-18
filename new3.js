document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = card.getAttribute('data-title');
            const content = card.getAttribute('data-content');
            modalTitle.textContent = title;
            modalContent.textContent = content;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});