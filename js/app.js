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