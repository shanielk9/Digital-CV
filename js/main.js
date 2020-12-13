/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.cloud', {})
sr.reveal('.home__title', {delay:200})
sr.reveal('.self-img', { delay: 400})

/*SCROLL ME*/
sr.reveal('.Me__title', {delay: 200})
sr.reveal('.intro', {delay: 400})

/*SCROLL SKILLS*/
sr.reveal('.Spaciallties-main', {})
sr.reveal('.skill-title-dev', {delay: 50})
sr.reveal('.skill-text-dev', {delay: 100})
sr.reveal('.skill-dev-img', {delay: 400})
sr.reveal('.skill-title-des', {delay: 500})
sr.reveal('.skill-text-des', {delay: 550})
sr.reveal('.skill-des-img', {delay: 850})

/*SCROLL projects*/
sr.reveal('.proj-main', {})
sr.reveal('.proj-title', {delay: 150})
sr.reveal('.carousel', {delay: 500})


/*SCROLL CONTACT*/
sr.reveal('.contact-title', {})
sr.reveal('.contact-text', {delay: 200})
sr.reveal('.contact-msg', {delay: 400})
sr.reveal('.contact-btn', {delay: 600})
