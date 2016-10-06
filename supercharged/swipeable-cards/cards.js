'use strict';

class Cards {
    constructor() {
        this.cards        = document.querySelectorAll('.card');
        this.target       = null;
        this.startX       = 0;
        this.currentX     = 0;
        this.distanceX    = 0;
        this.targetBCR    = null;
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

        document.addEventListener('mousedown', this.onStart);
        document.addEventListener('mousemove',  this.onMove);
        document.addEventListener('mouseup',   this.onEnd);
    }

    onStart(evt) {
        if (this.target) {
            return;
        }
        if (
            !evt.target.classList.contains('card') &&
            !evt.target.parentNode.classList.contains('card')
            ) {
            return;
        }
        // console.log('action Start', evt);
        if (evt.target.classList.contains('card')) {
            this.target = evt.target;
        } else {
            this.target = evt.target.parentNode;
        }
        this.draggingCard = true;
        this.targetBCR = this.target.getBoundingClientRect();
        this.currentX = evt.pageX || evt.touches[0].pageX;
        this.startX = this.currentX;
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

        if (this.draggingCard) {
            this.distanceX = this.currentX - this.startX;
        } else {
            this.distanceX -= (this.distanceX) / 4;
        }

        const isNearlyAtStart = Math.abs(this.distanceX) < 0.01;

        this.target.style.transform = `translate(${isNearlyAtStart ? 0 : this.distanceX}px, 0)`;

        if (isNearlyAtStart && !this.draggingCard) {
            this.target.style.transform = 'none';
            this.target.style.willChange = 'initial';

            this.target = null;
        }
    }
}

window.addEventListener('load', () => new Cards());


