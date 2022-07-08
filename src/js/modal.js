import { colors, members } from './Data.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modalContent = $('.modal-container');
const data = {};
let array_1 = ``, array_2 = ``, array_3 = ``;

members.map((member) => {
    switch (member.department) {
        case 'Ban giám đốc' : {
            array_1 = array_1.concat(`
                <li class="members-item flex-center-y">
                    <input class="member-checkbox" type="checkbox" value="${member.id}">
                    <div class="member-info grid flex-center-y">
                        <p class="info-1">${member.fullname}</p>
                        <p class="info-2">AnhNV</p>
                        <p class="info-3">${member.office}</p>
                    </div>
                </li>
            `);
            break;
        }
        case 'Hành chính nhân sự' : {
            array_2 = array_2.concat(`
                <li class="members-item flex-center-y">
                    <input class="member-checkbox" type="checkbox" value="${member.id}">
                    <div class="member-info grid flex-center-y">
                        <p class="info-1">${member.fullname}</p>
                        <p class="info-2">AnhNV</p>
                        <p class="info-3">${member.office}</p>
                    </div>
                </li>
            `);
            break;
        }
        case 'Kế toán' : {
            array_3 = array_3.concat(`
                <li class="members-item flex-center-y">
                    <input class="member-checkbox" type="checkbox" value="${member.id}">
                    <div class="member-info grid flex-center-y">
                        <p class="info-1">${member.fullname}</p>
                        <p class="info-2">AnhNV</p>
                        <p class="info-3">${member.office}</p>
                    </div>
                </li>
            `);
            break;
        }
    }
})

function addElementIntoModal( type ) {
    if ( type === 'addLabel') {
        data.title = "Thêm nhãn";
        data.content = `
            <div class="label-name-wrapper">
                <p class="label-text">Vui lòng nhập tên nhãn mới</p>
                <input type="text" class="label-input">
            </div>
            <div class="color-choose-wrapper">
                <span class="label-text">Chọn màu nhãn:</span>
                <div class="color-container">
                    ${colors.map((color, index) => {
                        return `
                            <div id-color="${color.id}" class="color-choose color-${index+1} ${index===0 ? "color-active" : ""} flex-center">
                                <span class="color-choose-icon material-icons">
                                    done
                                </span>
                            </div>
                        `
                    }).join(' ')}
                </div>
                <button type="button" class="delete-color">
                    Xóa màu
                </button>
            </div>
        `;
    }
    else if ( type === 'addMem') {
        data.title = "Thêm người duyệt";
        data.content = `
            <div class="modal__search flex-center-y">
                <div class="modal__icon-wrapper flex-center">
                    <span class="material-icons modal__icon icon">
                        search
                    </span>
                </div>
                <span class="w-full">
                    <input type="text" class="modal__search-input w-full" placeholder="Nhập để tìm kiếm...">
                </span>
            </div>
            <div class="modal__options">
                <div class="modal__member-group">
                    <div class="group-title-wrapper flex-center-y">
                        <span class="material-icons member-icon">
                            arrow_right
                        </span>
                        Ban Giám đốc
                    </div>
                    <ul class="members-list">
                        ${array_1}
                    </ul>
                </div>
                <div class="modal__member-group">
                    <div class="group-title-wrapper flex-center-y">
                        <span class="material-icons member-icon">
                            arrow_right
                        </span>
                        Hành chính nhân sự
                    </div>
                    <ul class="members-list">
                        ${array_2}
                    </ul>
                </div>
                <div class="modal__member-group active">
                    <div class="group-title-wrapper flex-center-y">
                        <span class="material-icons member-icon">
                            arrow_right
                        </span>
                        Kế toán
                    </div>
                    <ul class="members-list">
                        ${array_3}
                    </ul>
                </div>
            </div>
        `;
    }

    const html = `
            <div class="modal-title">
                <h3>${data.title}</h3>
                <div class="modal-close-btn close-modal">
                    <span class="icon material-icons">
                    close
                    </span>
                </div>
            </div>
            <div class="modal-body">
                ${data.content}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-white close-modal">
                    Hủy
                </button>
                <button type="button" class="btn-primary add-btn">
                    Thêm
                </button>
            </div>
        `
    modalContent.innerHTML = html;
}

export default addElementIntoModal;