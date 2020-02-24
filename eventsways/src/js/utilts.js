export default class EventDetails {
    constructor(elem, flag, icon, elem2, closeClassName = 'fas fa-angle-down', openClassName = 'fas fa-angle-up') {
        this.name = elem;
        this.flag = flag;
        this.icon = icon;
        this.closeClassName = closeClassName
        this.openClassName = openClassName;
        this.elem2 = elem2;
    }


    heightChangeHandler() {
        if (!this.flag) {
            this.name.style.height = this.heigthFinding();
            this.icon.className = this.openClassName;
            this.name.style.opacity = 1;
        } else {
            this.name.style.height = 0;
            this.icon.className = this.closeClassName;
            this.name.style.opacity = 0
        }
        this.changeFlag()
    }
    changeFlag() {
        this.flag = !this.flag;
    }
    heigthFinding() {
        return this.elem2.offsetHeight + 2 + 'px';
    }
}