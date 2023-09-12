const dropDownMenu = () => {
    const triggerBtn = document.querySelector('.dropdown__trigger')
    const menu = document.querySelector('.dropdown__menu')

    triggerBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
}

dropDownMenu()

const collapse = () => {
    const triggerBtn = document.querySelectorAll('.collapse__block-trigger')

    triggerBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.parentNode.classList.toggle('active')
        })
    })
}

collapse()

const rewiewPag = document.querySelectorAll('.swiper-pagination')[0]

const rewiewSwiper = new Swiper('.swiper-rewiews', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    navigation: {
        nextEl: '.swiper-rewiew-right',
        prevEl: '.swiper-rewiew-left',
    },
    pagination: {
        el: rewiewPag,
        clickable: true
    }
})

const newsPag = document.querySelectorAll('.swiper-pagination')[1]

const newsSwiper = new Swiper('.swiper-news', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    pagination: {
        el: newsPag,
        clickable: true
    }
})