const dropDownMenu = () => {
    const triggerBtn = document.querySelector('.dropdown__trigger')
    const menu = document.querySelector('.dropdown__menu')

    triggerBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
}

const collapse = () => {
    const triggerBtn = document.querySelectorAll('.collapse__block-trigger')

    triggerBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.parentNode.classList.toggle('active')
        })
    })
}


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

const showPopup = (popupSelector) => {
    const popup = document.querySelector(popupSelector)
    const overlay = document.querySelector('.overlay')
    const closeBtns = document.querySelectorAll('.close')

    overlay.classList.add('active')
    popup.classList.add('active')

    closeBtns.forEach(item => {
        item.addEventListener('click', () => {
            overlay.classList.remove('active')
            popup.classList.remove('active')
        })
    })

    overlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            overlay.classList.remove('active')
            popup.classList.remove('active')
        }
    })
}

const rewiewPopup = () => {
    const triggerBtn = document.querySelector('.rewiew__button')
    triggerBtn.addEventListener('click', () => {
        showPopup('.rewiew-popup')
    })
}

const newsPopup = () => {
    const triggerBtns = document.querySelectorAll('.news__item-link')

    triggerBtns.forEach(item => {
        item.addEventListener('click', () => {
            showPopup('.news-popup')
        })
    })
}

const priceFilter = () => {
    const priceFilters = document.querySelectorAll('.price__block input')

    priceFilters.forEach(item => {
        item.addEventListener('click', () => {
            priceFilters.forEach(item => {
                item.checked = false
            })
            item.checked = true
        })
    })
}

const selectPopup = () => {
    const triggerbtn = document.querySelector('.selection__button')
    const popup = document.querySelector('.select-popup')
    const fuelTypeField = popup.querySelector('.fuel-type')
    const priceField = popup.querySelector('.price-value')
    const bodyTypeField = popup.querySelector('.body-type')
    const fuelTypeFilters = document.querySelectorAll('.fuel-type__block input')
    const priceFilters = document.querySelectorAll('.price__block input')
    const bodyTypeFilters = document.querySelectorAll('.body-type__block input')

    const addValueToField = (inputs, field) => {
        let valueArr = []
        inputs.forEach(item => {
            if (item.checked) {
                let textContent = item.parentNode.nextElementSibling.textContent
                valueArr.push(textContent)
            }
        })
        if (valueArr.length > 0) {
            field.textContent = valueArr.join(', ')
        } else {
            field.textContent = 'Не выбран'
        }
    }
    
    triggerbtn.addEventListener('click', () => {
        showPopup('.select-popup')
        addValueToField(fuelTypeFilters, fuelTypeField)
        addValueToField(priceFilters, priceField)
        addValueToField(bodyTypeFilters, bodyTypeField)
    })
}

priceFilter()
selectPopup()
newsPopup()
rewiewPopup()
collapse()
dropDownMenu()