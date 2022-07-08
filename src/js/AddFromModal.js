import { colors } from "./Data.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const label_list = $('.label__list');
const members_list = $('.func__member-list');

let data = [

];

function RenderLabel() {
    let li = document.createElement('li');

    const htmlLabel = data.map((objectData,index) => {
        if (objectData.idColor !== "") {
            return `
                <li data-index="${index}" class="label-item flex-center-y">
                    <div class="label__item-info flex-center-y">
                        <span class="label-${objectData.idColor} label__icon material-icons">
                            label
                        </span>
                        <p class="label__content">${objectData.value}</p>
                    </div>
                    <div class="label__more-wrapper">
                        <span class="label__more-icon open-dropdown icon material-icons">
                            more_vert
                        </span>
                        <div class="test-label"></div>
                        <div class="dropdown__label-wrapper active-block">
                            <ul class="dropdown__list">
                                <li class="dropdown__row label__edit">Sửa</li>
                                <li class="dropdown__row label__remove">Xóa</li>
                            </ul>
                        </div>
                    </div>
                </li>
            `;
        }
    });

    label_list.innerHTML = htmlLabel.join('');

}

export function AddLabel(dataFromModal) {
    data = [...data, dataFromModal];
    RenderLabel();
}

export function Edit(dataIndex) {

}

export function DeleteLabel(dataIndex) {
    data.splice(dataIndex, 1);
    RenderLabel();
}

export default RenderLabel;
