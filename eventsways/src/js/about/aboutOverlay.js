export default class Overlay {
    constructor(overlay, classes, flag) {
        this.overlay = overlay;
        this.classes = classes;
        this.flag = flag
    }

    animateOverlay() {
        if (!this.flag) {
            this.overlay.classList.add(this.classes[0])
            setTimeout(() => {
                this.overlay.classList.add(this.classes[1])
            }, 100)
        } else {
            this.overlay.classList.remove(this.classes[1])
            setTimeout(() => {
                this.overlay.classList.remove(this.classes[0])
            }, 100)
        }
        this.changeFlag()
    }
    changeFlag() {
        this.flag = !this.flag
    }
}