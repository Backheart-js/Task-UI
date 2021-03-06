import addElementIntoModal from "./modal.js";
import RenderLabel, { AddLabel, DeleteLabel } from "./HandleModalLabel.js";
import RenderMember, { AddMember } from "./HandleModalMember.js";

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
const openModals = $$('.open-modal');
const modal = $('#modal');
const modalContent = $('.modal-container');
const labelList = $('.label__list');
let dataLabel = {
    value: "",
}
let dataMembers = [];
let sidebarActive = true;
let colorIsActive = false;


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

    closeModal: function () {
        modal.classList.remove('flex-center');
        modal.classList.add('hidden');
    },

    stopPropagationFunc: function (e) {
        e.stopPropagation();
    },

    handleEvent: function () {
        const _this = this;
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

        //handle modal
        openModals.forEach((openModal, index) => {
            openModal.addEventListener('click', function (e) {
                addElementIntoModal(e.target.title);
                modal.classList.add('flex-center');
                modal.classList.remove('hidden');
            })
        })

        modalContent.addEventListener('click', this.stopPropagationFunc)
        modal.addEventListener('click', this.closeModal)
        modalContent.addEventListener('click', function(e) {
            if (e.target.closest('.color-choose')) {
                $('.color-choose.color-active').classList.remove('color-active');
                e.target.classList.add('color-active');
            }
            else if (e.target.closest('.close-modal')) {
                _this.closeModal();
            }
            else if (e.target.closest('.add-btn')) {
                let value = $('.label-input') !== null ? $('.label-input').value : "";
                let idColor = $('.color-choose.color-active') !== null ? $('.color-choose.color-active').getAttribute('id-color') : "";
                dataLabel = {
                    value,
                    idColor
                }

                const idMembersNodeList = $('.member-checkbox') !== null ? $$('.member-checkbox:checked')  : "";
                const idMembers = Array.from(idMembersNodeList)
                let idMember = idMembers.map(id => id.value);

                value !== "" ? AddLabel(dataLabel) : AddMember(idMember);
                $('.label-input').value = "";
            }
            else if (e.target.closest('.group-title-wrapper')) {
                e.target.closest('.modal__member-group').classList.toggle('active');
            }
        })
        labelList.addEventListener('click', function (e) {
            if (e.target.closest('.label__more-wrapper')) {
                console.log(e.target.closest('.test-label'))
                $('.dropdown__label-wrapper').classList.toggle('active-block');
                // $('.dropdown__label-wrapper').addEventListener('click', function (e) {
                //     e.stopPropagation();
                // });
                window.onclick = function (e) {
                    if (!e.target.matches('.label__more-icon')) {
                        const dropdownContain = $(".dropdown__label-wrapper");
                        if (dropdownContain.classList.contains('active-block')) {
                            dropdownContain.classList.remove('active-block');
                        }
                    }
                }
            }
            $('.label__remove').addEventListener('click', function (e) {
                Delete(e.target.closest('.label-item').dataLabelset.index);
            })
        })
    },

    start: function () {
        RenderLabel();
        this.handleEvent();

        this.handleFuncTable(stars);
        this.handleFuncTable(labels);
    } 
}

page.start();
