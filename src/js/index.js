const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.category__function-item');
const menu_btn = $('.category__menu-wrap');
const content = $('#content');
const panel = $$('.panel__wrapper');
const stars = $$('.star-icon');
const labels = $$('.label-icon');
const dropdown_icon = $('.icon-dropdown');
const dropdown = $('.dropdown-checkbox');
const line_display = $$('.line-display-wrapper');
let sidebarActive = true;


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
        //handle toggle sidebar
        menu_btn.addEventListener('click', function () {
            $('#panel').classList.toggle('active-hidden', sidebarActive);
            content.classList.toggle('hide-sidebar',sidebarActive);
            sidebarActive = !sidebarActive;
        }),

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
        dropdown_icon.addEventListener('click', this.dropdownFunc);
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

        this.handleFuncTable(stars);
        this.handleFuncTable(labels);
    } 
}

page.start();