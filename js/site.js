document.addEventListener('DOMContentLoaded', function () {
    const questionContainer = document.getElementById('questionContainer');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const buttonsArea = document.getElementById('buttonsArea');

    // Mostrar el contenedor después de 2 segundos
    setTimeout(() => {
        questionContainer.classList.add('visible');
    }, 4000);

    const buttonsAreaRect = buttonsArea.getBoundingClientRect();
    const areaWidth = buttonsAreaRect.width - noBtn.offsetWidth;
    const areaHeight = buttonsAreaRect.height - noBtn.offsetHeight;

    let isRunning = false;

    // Función para mover el botón "No" a una posición aleatoria
    function moveNoButton() {
        if (!isRunning) {
            noBtn.classList.add('running');
            isRunning = true;
        }

        const randomX = Math.random() * areaWidth;
        const randomY = Math.random() * areaHeight;

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }

    // Mover el botón "No" cuando el cursor se acerque (para desktop)
    noBtn.addEventListener('mouseover', function () {
        moveNoButton();
    });

    // Mover el botón "No" cuando se toque (para móviles)
    noBtn.addEventListener('touchstart', function (e) {
        e.preventDefault();
        moveNoButton();
    });

    // También mover al hacer click (por si acaso)
    noBtn.addEventListener('click', function (e) {
        if (isRunning) {
            e.preventDefault();
            moveNoButton();
        }
    });

    // Evento para el botón "Sí"
    yesBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    // Cerrar el modal
    closeModal.addEventListener('click', function () {
        // modal.style.display = 'none';
        // Recargar la página después de cerrar el modal
        location.reload();
    });
});

onload = () => {
    document.body.classList.remove("container");
};