


// Slider Header animation



const sliderImg = document.querySelector(".slider-img");
const sliderTitle = document.querySelector(".slider-title");



const sliderElements = [{img: "grafiki/Slider1Duzy.jpg", text: "Profesjonelle Bilder"}, {img: "grafiki/Slider2Duzy.jpg", text: "Filmredigering"}, {img: "grafiki/Slider3Duzy.jpg", text: "Droneopptak og Fotografering"}, {img: "grafiki/second-gallery/second-gallery2.jpg", text:"Logotrykk"}, {img: "grafiki/car-wrapping/car-wrapping5.jpg", text: "Car wrapping"}];


let index = 0;

const Slider = () => {
  index++;
  if (index === sliderElements.length) {
    index = 0;
  }
  sliderImg.src = sliderElements[index].img;
  sliderTitle.textContent = sliderElements[index].text;
}

setInterval(Slider, 5000)

//    MENU/BURGER ANIAMTION

const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const listElements = document.querySelectorAll(".menu-list");




const menuAnimation = () => {
  burger.classList.toggle("active");
  menu.classList.toggle("menu-active");
  logo.classList.toggle("active-logo");
  listElements.forEach((list, index) => {
    if (list.style.animation) {
      list.style.animation = "";
    } else   {
      list.style.animation = `listAnimation 0.5s ease forwards ${index / 7}s `
    }
  })
}


burger.addEventListener("click", menuAnimation);

listElements.forEach(li => {
  li.addEventListener("click", () => {
    menuAnimation()
  })
})





 // SERVICES LIST ANIMATION 
const windowPosition = window.innerHeight;

const apearList = () => {
  const serviceList = document.querySelectorAll(".services-list");
  const service = document.querySelector(".services");
  const servicesPos = service.getBoundingClientRect().top;
  serviceList.forEach((list, index) => {
    if (servicesPos < windowPosition) {
      list.style.animation = `listAnimation 0.5s ease forwards ${index / 7}s `;
    } else {
      list.style.animation = '';
    }
  })
}

 window.addEventListener("scroll", apearList)


// FIRST GALLERY ANIMATIONS

const currentImg = document.querySelector(".current");
const smallImages = document.querySelectorAll(".small-img")


const firstGallery = (e) => {
  smallImages.forEach(img => {
    img.style.opacity = 1
  });
const smallImg = e.target;
currentImg.src = smallImg.src;
currentImg.classList.add("currentAnimation");
setTimeout(() => 
  currentImg.classList.remove("currentAnimation"), 500)
smallImg.style.opacity = 0.3;
}



smallImages.forEach(img => {
  img.addEventListener("click", firstGallery)
});



gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".photo-services", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 0.7, ease: "power1.in", scrollTrigger: {
  trigger: ".first-gallery",
  start: "-10%"
}});

gsap.fromTo(".current", {scale: 0}, {scale: 1, ease: "power1.in", duration: 0.7, delay: 0.2, scrollTrigger: {
  trigger: ".first-gallery",
  start: "-10%"
}});

gsap.fromTo(".small-img", {opacity: 0, y: 300, x: 300, rotation: 75}, {opacity: 1, y: 0, x:0, rotation: 0, stagger: 0.2, duration: 0.5, delay: 0.8, ease: "back.inOut(1.7)", scrollTrigger: {
  trigger: ".first-gallery",
  start: "-10%"
}});

//SECOND GALLERY ANIMATIONS

const bigImg = document.querySelector(".big-img");
const smallImages2 = document.querySelectorAll(".smaller-img");



const secondGalleryAnimation = (e) => {
  smallImages2.forEach(img => img.style.opacity = 1)
const smallImg = e.target;
bigImg.src = smallImg.src;
bigImg.classList.add("currentAnimation");
setTimeout(() => {
  bigImg.classList.remove("currentAnimation")
}, 500)
smallImg.style.opacity = 0.3
}

smallImages2.forEach(img => img.addEventListener("click", secondGalleryAnimation));

gsap.fromTo(".photo-services2", {x: "50%", opacity:0}, {x: 0, opacity:1, duration: 0.7, ease:"bounce.in", scrollTrigger: {
  trigger: ".second-gallery",
  start: "-5%"
}})
gsap.fromTo(".big-img", {x: "-50%", opacity:0}, {x: 0, opacity:1, duration: 0.7, ease: "back.in(1.7)", delay: 0.2, scrollTrigger: {
  trigger: ".second-gallery",
  start: "-5%"
}})
gsap.fromTo(".smaller-img", {y: "50%", opacity:0}, {y: 0, opacity:1, duration: 0.5, stagger: 0.2, delay:0.8, ease: "back.out(1.7)",  scrollTrigger: {
  trigger: ".second-gallery",
  start: "-5%"
}})

// DRONE SECTION ANIMATIONS

gsap.fromTo(".drone-services", {y: "-30%", opacity:0}, {y: 0, opacity:1, duration: 1, ease: "power4.in", scrollTrigger: {
  trigger: ".drone-photos",
  start: "top 10%"
}})
gsap.fromTo(".drone1", {x: "-150%"}, {x: 0, duration: 1.3, ease: "power1.out", scrollTrigger: {
  trigger: ".drone-photos",
  start: "0%",
  end: "100%",
  scrub: true,
  pin: true
}})
gsap.fromTo(".drone2", {x: "150%"}, {x: 0, duration: 1.3, ease: "power1.out", scrollTrigger: {
  trigger: ".drone-photos",
  start: "0%",
  end: "100%",
  scrub: true,
}})

// VIDEO SECTION ANIMATION

gsap.fromTo(".video-services", {x:"50%", opacity:0}, {x:0, opacity:1, duration: 0.7, ease:"power4.in",  scrollTrigger: {
  trigger: ".video",
 
}})
gsap.fromTo(".yt-video", {x:"-50%", y:"20%", opacity:0}, {x:0, opacity:1, y:0, duration: 0.5, stagger: 0.2, delay:0.5, ease:"power4.in",  scrollTrigger: {
  trigger: ".video",
  
}})

gsap.to(".right", {x: "20%", duration:0.5, ease:"back.out(1.7)", yoyo: true, repeat: -1})
gsap.to(".left", {x: "-20%", duration:0.5, ease:"back.out(1.7)", yoyo: true, repeat: -1})






gsap.fromTo(".form", {x:"100%", opacity:0}, {x: 0, opacity: 1, duration:1, ease: "elastic.out(1, 0.3)", scrollTrigger: {
  trigger: ".form-footer",
  start: "top 20%"
}})

// ARROW TO TOP ANIMATION

const arrowTop = () => {
  const videoSection = document.querySelector(".video");
  const videoPos = videoSection.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;
  const arrow = document.querySelector(".arrow-top");
  if(videoPos < (windowHeight / 2)) {
    arrow.classList.add("active")
  } else {
    arrow.classList.remove("active")
  }
}
window.addEventListener("scroll", arrowTop)

// COOKIES ALERT HANDLE

const cookiesAlert = document.querySelector(".cookies-alert");
const closeCookiesBtn = document.querySelector(".close-cookies");

const appearCookies = () => {
   const cookieEaten = localStorage.getItem("cookie");
   if(cookieEaten) {
     cookiesAlert.classList.add("hide")
   }

}




const setCookie = () => {
  localStorage.setItem("cookie", "true")
  cookiesAlert.classList.add("hide")
}

closeCookiesBtn.addEventListener("click", setCookie)
appearCookies()

// HANDLE CAR-WRAPPING GALLERY 



const wrappingImgs = document.querySelectorAll(".wrapper-img");
const dots = document.querySelectorAll(".dot");

let activeEelement = 0;

let runGallery;

const autoGallery = () => {
 
  runGallery = setInterval(() => {
    wrappingImgs.forEach(img => {
      img.classList.remove("active-img")
    })
  
  dots.forEach(dot => {
    dot.classList.remove("current-dot")
  })  
  
wrappingImgs[activeEelement].classList.add("active-img")
dots[activeEelement].classList.add("current-dot")
activeEelement++;

if(activeEelement === dots.length)  {
  activeEelement = 0;
}

  },4000)
  
}
autoGallery()

const handleDots = (e) => {
  dots.forEach(dot => {
    dot.classList.remove("current-dot")
  })
const currentDot = e.target;
const currentDotIndex = currentDot.dataset.index;
activeEelement = currentDotIndex
dots[activeEelement].classList.add("current-dot")
wrappingImgs[activeEelement].classList.add("active-img")
}

dots.forEach(dot => dot.addEventListener("click", handleDots))


gsap.fromTo(".wrapping-title", {y: "-30%", opacity:0}, {y: 0, opacity:1, duration: 1, ease: "power4.in", scrollTrigger: {
  trigger: ".car-wrapping",
  start: "top 10%"
}})

gsap.fromTo(".wrapping-text", {x: "-50%", opacity:0}, {x: 0, opacity:1, duration: 0.7, ease: "back.in(1.7)", delay: 0.2, scrollTrigger: {
  trigger: ".car-wrapping",
  start: "top 10%"
}})

// FORM SUBMIT


const backToPage = document.querySelector(".close-page");

const nameInput = document.querySelector(".name-input");
const secondNameInput = document.querySelector(".second-name");
const emailInput = document.querySelector(".email");
const messageArea = document.querySelector(".message");



const clearInputs = () => {
[nameInput, emailInput, secondNameInput, messageArea].forEach(input => {
  input.value = ''
})
}


backToPage.addEventListener("click", clearInputs)