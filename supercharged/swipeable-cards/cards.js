class Cards {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        this.target   = null;
        this.pageX    = 0;
        this.currentX = 0;
        this.limitDistance = 0;
        // console.log('we have ' + this.cards.length + ' cards');

        this.addEventsListener();
    }

    addEventsListener() {
        window.addEventListener('touchstart', this.onStart);
        window.addEventListener('touchmove',  this.onMove);
        window.addEventListener('touchend',   this.onEnd);
    }

    onStart(evt) {
        if (!evt.target.classList.contains('card')) {
            return;
        }
        // console.log('action Start', evt);
        this.target = evt.target;
        this.currentX = evt.pageX || evt.touches[0].pageX;
        this.limitDistance = Math.ceil(this.target.clientWidth / 2);
    }

    onMove(evt) {
        if (this.target !== evt.target) {
            return;
        }
        // console.log('action Move', evt);
        this.pageX = evt.pageX || evt.touches[0].pageX;
        let distanceX = this.pageX - this.currentX;
        this.target.style.transform = 'translate(' + (this.pageX < (window.innerWidth - 10) ? distanceX : window.innerWidth - 10 - this.currentX) + 'px, 0)';
    }

    onEnd(evt) {
        if (this.target !== evt.target) {
            return;
        }
        // console.log('action End', evt);
        this.target.style.transform = 'translate(0, 0)';
        this.target = null;
    }

    onUpdate() {
        //
    }
}

window.addEventListener('load', () => new Cards());
