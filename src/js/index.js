const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.category__function-item');
const panel = $$('.panel__wrapper');

// handle Tab category
tabs.forEach((tab, index) => {
    tab.addEventListener('click', function(e) {
        $('.category__function-item.active').classList.remove('active');
        this.classList.add('active');

        $('.panel__wrapper.active').classList.remove('active');
        panel[index].classList.add('active');
    });
})

//handle star 
const stars = $$('.star-icon');
stars.forEach((star,index) => {
    let isStar = false;
    star.addEventListener('click', function(e) {
        isStar = !isStar;
        isStar===true ? this.innerText = 'star' : this.innerText = 'star_outline';
        this.classList.toggle('active', isStar);
    })
})

//handle checkbox
// const checkboxAll = $('.table__content-checkbox');
// const checkbox = $$('.table__content-checkbox');

// checkboxAll.addEventListener('change', function(e) {
//     console.log(this.checked);
//     if (this.checked) {
//         checkbox.forEach((check) => {
//             console.log(this.checked);
//             check.checked = 'true';
//         })
//     }
//     else {
//         checkbox.forEach((check) => {
//             console.log(this.checked);
//             check.checked = 'false';
//         })
//     }
// })