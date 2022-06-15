const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.category__function-item');
const panel = $$('.panel__wrapper');
const stars = $$('.star-icon');
const labels = $$('.label-icon');
const dropdown = $('.dropdown-checkbox');
const line_display = $$('.line-display-wrapper');


const page = {
    data: [
        //Dữ liệu từ API sẽ đổ ra đây
    ],

    //handle star 
    handleFuncTable: function(elements) {
        elements.forEach((element, index) => {
            let isActive = false;
            element.addEventListener('click', function (e) {
                isActive = !isActive;
                if (elements === stars) {
                    isActive === true ? this.innerText = 'star' : this.innerText = 'star_outline';
                }
                this.classList.toggle('active', isActive);
            })
        })
    },
    dropdownFunc: function () {
        dropdown.classList.toggle('active-block');
    },

    handleEvent: function () {
        // handle Tab category
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', function (e) {
                $('.category__function-item.active').classList.remove('active');
                this.classList.add('active');

                $('.panel__wrapper.active').classList.remove('active');
                panel[index].classList.add('active');
            });
        })

        //handle dropdown
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation();
        })
        window.onclick = function (e) {
            if (!e.target.matches('.icon-dropdown')) {
                const dropdownContain = $(".dropdown-checkbox");
                if (dropdownContain.classList.contains('active-block')) {
                    dropdownContain.classList.remove('active-block');
                }
            }
        }

        //handle line display
        line_display.forEach((line,index) => {
            line.addEventListener('click', function (e) {
                $('.line-display-wrapper.active').classList.remove('active');
                this.classList.add('active');
            })
        })
    },

    start: function () {
        this.handleEvent();

        this.dropdownFunc();

        this.handleFuncTable(stars);
        this.handleFuncTable(labels);
    } 
}

page.start();