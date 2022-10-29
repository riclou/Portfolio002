const btnMobile = document.getElementById('btn-mobile');
const buttonPort = document.getElementById('portfolio')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


const light = document.getElementById('light'),
hamburguer = document.getElementById('hamburger'),
menu = document.getElementById('btn-mobile')

light.onclick = function(){
  document.body.classList.toggle("darktheme")
  document.body.style.transition = " 0.6s ease-in"
  if(document.body.classList.contains("darktheme")){
    light.style.color = "#000"
    hamburguer.style.color = "#000"
    menu.style.color = "#000"
  }
  else{
    light.style.color = "#fff"
    hamburguer.style.color = "#fff"
    menu.style.color = "#fff"
  }
}

window.onscroll = function() {
  myFunction()
}

const header = document.getElementById("header");
const sticky = header.offsetTop;
const menuLinks = document.querySelectorAll('a[href^="#"]')
const links = document.querySelectorAll('.itens')



function myFunction() {

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.backgroundColor = "var(--backgroundHeader)"

    links.forEach(e => {
      e.style.color = "#fff"
    })
    light.style.color = "#fff"
    hamburguer.style.color = "#fff"
    menu.style.color = "#fff"


  } else {
    header.classList.remove("sticky");
    header.style.backgroundColor = "var(--background)"
    header.style.boxShadow = "none"
    links.forEach(e => {
      e.style.color = "#fff"
    })
    light.style.color = "var(--words)"
    hamburguer.style.color = "var(--words)"
    menu.style.color = "var(--words)"
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      })
  })
})