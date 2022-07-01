import { colors } from "./color.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const label_list = $('.label__list');

function Add(data) {
    console.log(data);
    let li = document.createElement('li');
    if (data.id !== "") {
        li.innerHTML = `
            <div class="label__item-info flex-center-y">
                <span class="label-${data.idColor} label__icon material-icons">
                    label
                </span>
                <p class="label__content">${data.value}</p>
            </div>
            <span class="label__more-icon icon material-icons">
                more_vert
            </span>
        `
        li.setAttribute('class', 'label-item', 'flex-center-y');
    }
    else {

    }

    label_list.appendChild(li);
}

export default Add;