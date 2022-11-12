document.addEventListener("DOMContentLoaded", function(event) {
    const triggers = document.getElementsByClassName('trigger-modal');
    const triggerArray = Array.from(triggers).entries();
    const modals = document.getElementsByClassName('modal');
    const closeButtons = document.getElementsByClassName('btn-close');
    var closeCta = document.querySelectorAll('[data-close="close-modal"]');

    for (let [index, trigger] of triggerArray) {
        const toggleModal = () => {
            modals[index].classList.toggle('show-modal');
        }
        trigger.addEventListener("click", toggleModal);
        closeButtons[index].addEventListener("click", toggleModal);
        closeCta[index].addEventListener("click", toggleModal);


    }
});