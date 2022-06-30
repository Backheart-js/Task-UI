const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modalContent = $('.modal-container');

function addElementIntoModal( type ) {
    if ( type === 'addLabel') {
        console.log('Adding element')

        const html = `
                <div class="modal-title">
                    <h3>Thêm nhãn</h3>
                    <div class="modal-close-btn">
                        <span class="icon material-icons">
                        close
                        </span>
                    </div>
                </div>
                <div class="modal-body">

                </div>
            `
    
        modalContent.innerHTML = html;
    }
    else if ( type === 'addPost') {
        const html = `
                <div class="modal-title">
                    <h3>Thêm post</h3>
                    <div class="modal-close-btn">
                        <span class="icon material-icons">
                        close
                        </span>
                    </div>
                </div>
                <div class="modal-body">

                </div>
            `
    
        modalContent.innerHTML = html;
    }
}

export default addElementIntoModal;