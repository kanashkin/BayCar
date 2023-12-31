const dropDownMenu = () => {
    const triggerBtn = document.querySelector('.dropdown__block')
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

const catalogPagination = () => {
    const paginationItems = document.querySelectorAll('.catalog__pagination-item')
    const paginationTrigger = document.querySelector('.pagination-arrow')

    paginationItems[0].classList.add('active')
    
    paginationItems.forEach(item => {
        item.addEventListener('click', () => {
            paginationItems.forEach(item => {
                item.classList.remove('active')
            })
            item.classList.add('active')
        })
    })

    paginationTrigger.addEventListener('click', () => {
        const currentItem = document.querySelector('.catalog__pagination-item.active')
        const currentIndex = Array.from(paginationItems).indexOf(currentItem)

        paginationItems.forEach(item => {
            item.classList.remove('active')
        })

        paginationItems[currentIndex + 1].classList.add('active')
    })
}

catalogPagination()


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


const carPopup = () => {
    const triggerBtn = document.querySelectorAll('.catalog__item')
    const carPopups = document.querySelectorAll('.car-popup')

    triggerBtn.forEach(item => {
        item.addEventListener('click', () => {
            let carId = item.getAttribute('data-car')
            carPopups.forEach(item => {
                let popupId = item.getAttribute('data-car')
                if (popupId === carId) {
                    showPopup(`.car-popup[data-car="${popupId}"]`)
                }
            })
        })
    })
}

const newsPopup = () => {
    const triggerBtns = document.querySelectorAll('.news__item-link')
    const newsPopups = document.querySelectorAll('.news-popup')

    triggerBtns.forEach(item => {
        item.addEventListener('click', () => {
            let newsId = item.getAttribute('data-news')
            newsPopups.forEach(item => {
                let popupId = item.getAttribute('data-news')
                if (popupId === newsId) {
                    showPopup(`.news-popup[data-news="${popupId}"]`)
                }
            })
        })
    })
}


const mainPopup = () => {
    const triggerBtns = document.querySelectorAll('.button-application')
    
    triggerBtns.forEach(item => {
        item.addEventListener('click', () => {
            showPopup('.select-popup')
            const popup = document.querySelector('.select-popup')
            const parametersBlock = popup.querySelector('.select-popup-parameters')
            parametersBlock.style.display = 'none'
        })
    })
}

const rewiewPopup = () => {
    const triggerBtn = document.querySelector('.rewiew__button')
    triggerBtn.addEventListener('click', () => {
        showPopup('.rewiew-popup')
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
        const parametersBlock = popup.querySelector('.select-popup-parameters')
        parametersBlock.style.display = ''
        addValueToField(fuelTypeFilters, fuelTypeField)
        addValueToField(priceFilters, priceField)
        addValueToField(bodyTypeFilters, bodyTypeField)
    })
}

const catalogFilters = () => {
    const tabs = document.querySelectorAll('.catalog__tab')
    const dropdownItems = document.querySelectorAll('.dropdown__item')
    const catalogItems = document.querySelectorAll('.catalog__item')

    let currentFirm = 'all'
    let currentCarType = 'all'

    tabs.forEach(item => {
        item.addEventListener('click', () => {
            tabs.forEach(item => {
                item.classList.remove('active')
            })
            item.classList.add('active')
            currentCarType = item.getAttribute('data-car-type')
            updateItems()
        })
    })

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            currentFirm = item.getAttribute('data-firm')
            updateItems()
        })
    })

    const updateItems = () => {
        catalogItems.forEach(item => {
            if (currentCarType === 'all' && currentFirm != 'all') {
                if (item.getAttribute('data-firm') === currentFirm) {
                    item.style.display = ''
                } else {
                    item.style.display = 'none'
                }
            } else if (currentCarType != 'all' && currentFirm === 'all') {
                if (item.getAttribute('data-car-type') === currentCarType) {
                    item.style.display = ''
                } else {
                    item.style.display = 'none'
                }
            } else if (currentCarType != 'all' && currentFirm != 'all') {
                if (item.getAttribute('data-car-type') === currentCarType && item.getAttribute('data-firm') === currentFirm) {
                    item.style.display = ''
                } else {
                    item.style.display = 'none'
                }
            } else if (currentFirm === 'all' && currentCarType === 'all') {
                item.style.display = ''
            } else if (currentFirm != 'all' && currentCarType === 'all') {
                item.style.display = ''
            }
        })

        const menu = document.querySelector('.dropdown__menu')
        menu.classList.remove('active')
    }
}

const pageScroll = () => {
    const btns = document.querySelectorAll('.nav__list-item a')
    const promoBtn = document.querySelector('.button-more-link')

    const scrollToBlock = (item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            let blockId = item.getAttribute('href')
            let block = document.querySelector(blockId)
            block.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }

    btns.forEach(item => {
        scrollToBlock(item)
    })

    scrollToBlock(promoBtn)
}


const burgerMenu = () => {
    const triggerOpenBtn = document.querySelector('.burger')
    const triggerCloseBtn = document.querySelector('.burger-menu-close')
    const menu = document.querySelector('.burger-menu')

    triggerOpenBtn.addEventListener('click', () => {
        menu.classList.add('active')
    })

    triggerCloseBtn.addEventListener('click', () => {
        menu.classList.remove('active')
    })

    const menuItems = menu.querySelectorAll('.nav__list-item a')

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active')
        })
    })
}


const rewiewPag = document.querySelectorAll('.swiper-pagination')[0]

const rewiewSwiper = new Swiper('.swiper-rewiews', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
        el: rewiewPag,
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            navigation: {
                nextEl: '.swiper-rewiew-right',
                prevEl: '.swiper-rewiew-left',
            },
        }
    }
})

const newsPag = document.querySelectorAll('.swiper-pagination')[1]

const newsSwiper = new Swiper('.swiper-news', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: newsPag,
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
})

const carSwiper = new Swiper('.swiper-car', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-car-right',
        prevEl: '.swiper-car-left'
    }
})

window.addEventListener('DOMContentLoaded', () => {
    pageScroll()
    mainPopup()
    catalogFilters()
    carPopup()
    priceFilter()
    selectPopup()
    newsPopup()
    rewiewPopup()
    collapse()
    dropDownMenu()
    burgerMenu()
})