class Cards {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        this.target   = null;
        this.draggingCard = false;
        this.pageX    = 0;
        this.currentX = 0;
        this.limitDistance = 0;
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
        this.draggingCard = true;
        this.target.style.willChange = 'transform';
        this.currentX = evt.pageX || evt.touches[0].pageX;
        this.limitDistance = Math.ceil(this.target.clientWidth / 2);
    }

    onMove(evt) {
        if (!this.target) {
            return;
        }
        // console.log('action Move', evt);
        this.pageX = evt.pageX || evt.touches[0].pageX;
        let distanceX = this.pageX - this.currentX;
        this.target.style.transform = 'translate(' + (this.pageX < (window.innerWidth - 10) ? distanceX : window.innerWidth - 10 - this.currentX) + 'px, 0)';
    }

    onEnd(evt) {
        if (!this.target) {
            return;
        }
        // console.log('action End', evt);
        this.draggingCard = false;
    }

    update() {
        if (!this.target) {
            return;
        }

        if (!this.draggingCard) {
            this.target.style.transform = 'translate(0, 0)';
            this.target = null;
        }

        requestAnimationFrame(this.update);
    }
}

window.addEventListener('load', () => new Cards());
