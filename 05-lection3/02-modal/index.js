(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');

    modalOpen.addEventListener("click", () => {
        modal.classList.add("open");
        document.body.overflow = 'hidden';
    })
    close.addEventListener("click", () => {
        modal.classList.remove("open");
        document.body.overflow = 'initial';
    })
})();