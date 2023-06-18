const overlay = document.getElementById('overlay');
const menuBars = document.getElementById('menu-bars')
const navMainPage = document.getElementById('navMainPage')
const navAboutPage = document.getElementById('navAboutPage')
const navContactPage = document.getElementById('navContactPage')
const navReferencesPage = document.getElementById('navReferencesPage')
const navItems = [navMainPage, navAboutPage, navContactPage, navReferencesPage]

function navAnimations(directionOld, directionNew) {
    navItems.forEach((navItem, index) => {
        navItem.classList.replace(
            `slide-${directionOld}-${index + 1}`,
            `slide-${directionNew}-${index + 1}`
        )
    })
}

function toggleMenuBars() {
    menuBars.classList.toggle('active')
    if (menuBars.classList.contains('active')) {
        overlay.classList.add('menu-active')
        navAnimations('out', 'in')
    }
    else {
        overlay.classList.remove('menu-active')
        navAnimations('in', 'out')
    }

}

navItems.forEach((navItem) => {
    navItem.addEventListener('click', toggleMenuBars)
})

menuBars.addEventListener('click', toggleMenuBars)