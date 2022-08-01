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


const light = document.getElementById('light')

light.onclick = function(){
  document.body.classList.toggle("darktheme")
  document.body.style.transition = " 0.6s ease-in"
  if(document.body.classList.contains("darktheme")){
    light.style.color = "#000"
  }
  else{
    light.style.color = "#fff"
  }
}

window.onscroll = function() {
  myFunction()
}

const header = document.getElementById("header");
const sticky = header.offsetTop;
const menuLinks = document.querySelectorAll('a[href^="#"]')
console.log(menuLinks)


function myFunction() {

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.backgroundColor = "var(--backgroundHeader)"
    header.style.boxShadow = "0px 0px 3px 0px var(--words)"
    menuLinks.forEach(e => {
      e.style.color = "#fff"
    })
    light.style.color = "#fff"

  } else {
    header.classList.remove("sticky");
    header.style.backgroundColor = "var(--background)"
    header.style.boxShadow = "none"
    menuLinks.forEach(e => {
      e.style.color = "var(--words)"
    })
    light.style.color = "var(--words)"
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});