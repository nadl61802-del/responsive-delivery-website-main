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


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
