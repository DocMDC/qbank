const navbarBtn = document.querySelector(".navbar-button");
const navbar = document.querySelector(".navbar")
const navbarExitBtn = document.querySelector(".navbar-exit-btn")
const navbarOpened = document.querySelector(".navbar-opened")
const projectsTitleEl = document.querySelector(".projects-title")
const openedProjectsContainerEl = document.querySelector(".opened-projects-container")
const projectsOpenBtn = document.querySelector(".projects-open-btn")


navbarBtn.addEventListener("click", () => {
    navbar.classList.add('show')
    navbarBtn.classList.add('hide')
    navbarExitBtn.classList.remove('hide')
    navbarExitBtn.classList.add('show')
    navbarOpened.classList.remove('hide')
})

navbarExitBtn.addEventListener('click', () => {
    navbar.classList.remove('show')
    navbarBtn.classList.remove('hide')
    navbarExitBtn.classList.add('hide')
    navbarExitBtn.classList.remove('show')
    navbarOpened.classList.add('hide')
})

projectsOpenBtn.addEventListener("click", () => {
    projectsOpenBtn.classList.add('animate')
    projectsTitleEl.classList.add('hide')
    openedProjectsContainerEl.classList.remove('hide')
})