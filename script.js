const images = document.querySelectorAll(".website-img");
let index = 0;

function showNextImage() {
  images.forEach(img => img.style.display = "none");
  images[index].style.display = "block";
  index = (index + 1) % images.length;
}

setInterval(showNextImage, 1000);

showNextImage();


document.getElementById('year').textContent = new Date().getFullYear();

// --------------------------------------------

gsap.fromTo(
  ".website-holder",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0 }
);

gsap.fromTo(
  "#top-logo",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0 }
);

gsap.fromTo(
  ".tiny-board",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.1}
);

gsap.fromTo(
  ".main-title",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2}
);

gsap.fromTo(
  ".alt-text",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3}
);

gsap.fromTo(
  ".main-cta-button",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3}
);

gsap.fromTo(
  ".people-holder",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
);

gsap.fromTo(
  ".pfp-img",
  { y: 25, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.15, delay: 0.5 }
);

gsap.fromTo(
  ".process-container",
  { y: 25, opacity: 0 },
  { 
    y: 0, 
    opacity: 1, 
    duration: 1, 
    ease: "power2.out", 
    stagger: 0.2, 
    scrollTrigger: {
      trigger: ".processes-holder",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(
  ".process-container-outside",
  { y: 25, opacity: 0 },
  { 
    y: 0, 
    opacity: 1, 
    duration: 1, 
    ease: "power2.out", 
    stagger: 0.2, 
    scrollTrigger: {
      trigger: ".processes-holder-outside",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  }
);


