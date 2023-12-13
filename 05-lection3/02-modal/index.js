// (function() {
//     const close = document.getElementById('modal-close');
//     const modal = document.getElementById('modal');
//     const modalOpen = document.getElementById('modal-open');

//     if (!close || !modalOpen || !modal) {
//         return;
//     }

//     modalOpen.addEventListener('click', () => {
//         modal.style.display = 'block';
//         document.body.overflow = 'hidden';
//     });

//     close.addEventListener('click', () => {
//         modal.style.display = 'none';
//         document.body.overflow = 'initial';
//     });
// })();
document.getElementById("modal-open").addEventListener("click",function() {
    document.getElementById("modal").classList.add("open")
})
document.getElementById("modal-close").addEventListener("click",function() {
    document.getElementById("modal").classList.remove("open")
})