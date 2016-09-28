class Cards {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        console.log('we have ' + this.cards.length + ' cards');
    }
}

window.addEventListener('load', () => new Cards());
