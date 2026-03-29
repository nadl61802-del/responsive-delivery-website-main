/*=============== SHOW MENU ===============*/
const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
        toggle = document.getElementById(toggleId)
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
    })

}
showMenu('nav-menu', 'nav-toggle')
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
/*=============== SWIPER REVIEWS ===============*/
const swiperReviews = new Swiper('.reviews_swiper', {
    loop: true,
    spaceBetween: 16,
    geabCursor: true,
    speed: 600,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnTnteraction: false
    }
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
})
sr.reveal(`.home_title, .home_description, .home_data, .button`, { interval: 100 })
sr.reveal(`.home_img`, { delay: 900 })
sr.reveal(`.home_phone`, { origin: 'left', delay: 1500 })
sr.reveal(`.home_comment`, { origin: 'right', delay: 1800 })
sr.reveal(`.home_social`, { origin: 'bottom', delay: 2100 })


sr.reveal(`.service_card, .service_title, .service_description`, { interval: 100 })

sr.reveal(`.menu_card`, { interval: 100 })

sr.reveal(`.reviews_content`, { origin: 'right' })
sr.reveal(`.reviews_image`, { origin: 'left', delay: 600 })


sr.reveal(`.app .section_subtitle,.app .section_title, .app_description, .app .button `, { interval: 100 })
sr.reveal(`.app_image`, { origin: 'bottom', delay: 900 })

sr.reveal(`.map_area`, { origin: 'right'})
sr.reveal(`.map_card`, { origin: 'left', delay: 600 })

sr.reveal(`.footer_data, footer_content, div`, { interval: 100 })
