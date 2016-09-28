class Cards {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        console.log('we have ' + this.cards.length + ' cards');

        this.addEventsListener();
    }

    addEventsListener() {
        window.addEventListener('touchstart', this.onStart);
        window.addEventListener('touchmove',  this.onMove);
        window.addEventListener('touchend',   this.onEnd);
    }

    onStart(evt) {
        console.log('action Start', evt);
    }

    onMove(evt) {
        console.log('action Move', evt);
    }

    onEnd(evt) {
        console.log('action End', evt);
    }

    onUpdate() {
        //
    }
}

window.addEventListener('load', () => new Cards());
