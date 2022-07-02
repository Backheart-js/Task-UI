import { colors, members } from "./Data.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const label_list = $('.label__list');

function Add(data) {
    let li = document.createElement('li');
    if (data.id !== "") {
        li.innerHTML = `
            <div class="label__item-info flex-center-y">
                <span class="label-${data.idColor} label__icon material-icons">
                    label
                </span>
                <p class="label__content">${data.value}</p>
            </div>
            <div class="label__more-wrapper">
                <span class="label__more-icon open-dropdown icon material-icons">
                    more_vert
                </span>
                <div class="dropdown__wrapper dropdown__label-wrapper">
                    <ul class="dropdown__list">
                        <li class="dropdown__row">Sửa</li>
                        <li class="dropdown__row">Xóa</li>
                    </ul>
                </div>
            </div>
        `
        li.setAttribute('class', 'label-item', 'flex-center-y');
    }
    else {

    }

    label_list.appendChild(li);
}

export default Add;