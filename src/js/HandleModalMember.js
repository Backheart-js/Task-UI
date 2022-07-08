const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const members_list = $('.func__member-list');
let data = [

];

function RenderMember() {

}

export function AddMember(dataFromModal) {
    data = [...data, dataFromModal];
    RenderMember();
}

export default RenderMember;