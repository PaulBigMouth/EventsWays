export default class ViewEvents {
    constructor(btns, classes, map, ul, elements = [
        document.querySelectorAll('.event-item'),
        document.querySelectorAll('.event-item-title'),
        document.querySelectorAll('.event-item-description'),
        document.querySelectorAll('.event-img')
    ]) {
        this.btns = btns;
        this.classes = classes;
        this.ul = ul;
        this.map = map
        this.elements = elements
    }
    ulView(index) {
        index === 2 ? this.ul.style.display = 'none' : this.ul.style.display = 'grid'
    }
    changeViewHandler(elem) {
        let index;
        if (elem) {
            index = this.findIndex(elem)
        } else {
            index = +sessionStorage.getItem('btnflag')
        }
        console.log(typeof index)
        this.btns.map((elem, ind) => {
            if (ind !== index) {
                elem.disabled = false;
                elem.className = ''
            } else {
                elem.disabled = true;
                elem.className = 'active-btn'
            }
        })
        this.ulView(index)
        if (index === 0) {
            this.changeClasses().defaultView()
        }
        if (index === 1) {
            this.changeClasses().listView()
        }
        if (index === 2) {
            this.changeClasses().mapView()
        }
        sessionStorage.setItem('btnflag', index)

    }
    findIndex(elem) {
        console.log(+elem.getAttribute('data-flag'))
        return +elem.getAttribute('data-flag');
    }
    changeClasses(index, preIndex) {
        const _this = this
        return {
            itemClassesChange(method) {
                _this.elements.forEach((arr, index) => {
                    arr.forEach(elem => {
                        if (method) {
                            elem.classList.add(_this.classes[1].classes[index])
                        } else {
                            elem.classList.remove(_this.classes[1].classes[index])
                        }
                    })
                })
            },
            defaultView() {
                _this.ul.classList.add(_this.classes[0].ulClass)
                _this.ul.classList.remove(_this.classes[1].ulClass)
                _this.map.classList.remove('mapActive')
                this.itemClassesChange(false)
            },
            listView() {
                _this.ul.classList.add(_this.classes[1].ulClass)
                _this.ul.classList.remove(_this.classes[0].ulClass)
                _this.map.classList.remove(_this.classes[2].classes)
                this.itemClassesChange(true)
            },
            mapView() {
                _this.map.classList.add(_this.classes[2].classes)
                this.itemClassesChange(false)
            }
        }
    }
}