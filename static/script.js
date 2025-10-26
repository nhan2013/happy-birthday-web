const giftBox = document.getElementById('gift-box');
const message = document.getElementById('message');

giftBox.addEventListener('click', () => {
    giftBox.classList.add('opened');
    message.classList.add('show');
});
