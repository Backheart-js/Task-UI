import { colors } from './color.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modalContent = $('.modal-container');
const data = {};

function addElementIntoModal( type ) {
    if ( type === 'addLabel') {
        data.title = "Thêm nhãn";
        data.content = `
            <div class="">
                <p>Vui lòng nhập tên nhãn mới</p>
                <input type="text" class="" placeholder="Enter">
            </div>
            <div class="color-choose-wrapper">
                <span>Chọn màu nhãn:</span>
                <div class="color-container">
                    ${colors.map((color, index) => {
                        return `
                            <div class="color-choose color-${index+1} flex-center">
                                <span class="color-choose-icon material-icons">
                                    done
                                </span>
                            </div>
                        `
                    })}
                </div>
                <button type="button" class="delete-color">
                    Xóa màu
                </button>
            </div>
        `;
    }
    else if ( type === 'addPost') {
        data.title = "Thêm post";
        data.content = `
            
        `;
    }

    const html = `
            <div class="modal-title">
                <h3>${data.title}</h3>
                <div class="modal-close-btn">
                    <span class="icon material-icons">
                    close
                    </span>
                </div>
            </div>
            <div class="modal-body">
                ${data.content}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-white">
                    Hủy
                </button>
                <button type="button" class="btn-primary">
                    Thêm
                </button>
            </div>
        `
    modalContent.innerHTML = html;
}

export default addElementIntoModal;