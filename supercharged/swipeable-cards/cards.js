'use strict';

class Cards {
    constructor() {
        this.cards        = document.querySelectorAll('.card');
        this.target       = null;
        this.startX       = 0;
        this.currentX     = 0;
        this.draggingCard = false;
        // console.log('we have ' + this.cards.length + ' cards');

        this.onStart = this.onStart.bind(this);
        this.onMove  = this.onMove.bind(this);
        this.onEnd   = this.onEnd.bind(this);
        this.update  = this.update.bind(this);

        this.addEventsListener();

        requestAnimationFrame(this.update);
    }

    addEventsListener() {
        document.addEventListener('touchstart', this.onStart);
        document.addEventListener('touchmove',  this.onMove);
        document.addEventListener('touchend',   this.onEnd);
    }

    onStart(evt) {
        if (!evt.target.classList.contains('card')) {
            return;
        }
        // console.log('action Start', evt);
        this.target = evt.target;
        this.currentX = evt.pageX || evt.touches[0].pageX;
        this.startX = this.currentX;
        this.draggingCard = true;
        this.target.style.willChange = 'transform';
    }

    onMove(evt) {
        if (!this.target) {
            return;
        }

        this.currentX = evt.pageX || evt.touches[0].pageX;
    }

    onEnd(evt) {
        if (!this.target) {
            return;
        }
        // console.log('action End', evt);
        this.draggingCard = false;
    }

    update() {
        requestAnimationFrame(this.update);

        if (!this.target) {
            return;
        }

        const distanceX = this.currentX - this.startX;
        this.target.style.transform = `translate(${distanceX}px, 0)`;
        // if (!this.draggingCard) {
        // }
    }
}

window.addEventListener('load', () => new Cards());
