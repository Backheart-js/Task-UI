import { colors } from './color.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modalContent = $('.modal-container');
const data = {};

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