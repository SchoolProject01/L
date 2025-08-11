

// Navigation setup
const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("counter");
const dots = document.getElementById("dots");
let currentSlide = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? "block" : "none";
  });
  counter.textContent = `${currentSlide + 1}/${slides.length}`;
  updateDots();
  animateSlide(currentSlide);
}

function updateDots() {
  dots.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === currentSlide) dot.classList.add("active");
    dots.appendChild(dot);
  }
}

// Animate slides with GSAP
function animateSlide(slideIndex) {
  const elements = slides[slideIndex].querySelectorAll(".character");

  // Start all elements invisible
  gsap.set(elements, { opacity: 0, y: 50, scale: 0.8 });

  // Fade and rise in
  gsap.to(elements, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    stagger: 0.3,
    ease: "back.out(1.5)"
  });

  // Slide-specific animations
  switch (slideIndex) {
    case 0: // Bedroom - subtle bounce
      gsap.to("#bed, #chair, #lamp-desk, #table, #window script1" , {
        y: "+=10",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut"
      });
      break;

    case 1: // Bathroom - mirror shimmer (scale)
      gsap.to("#", {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
        
      });
      break;

    case 2: // Closets - slow float
      gsap.to("#big-closet, #closet, background2, script3" , {
        y: "+=5",
        repeat: -1,
        yoyo: true,
        duration: 3
      });
      break;

    case 3: // Door & Walking Man - man moves a little
      gsap.to("#man-walking", {
        x: "+=20",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
      });
      break;

    case 4: // Single Man - slow pulse
      gsap.to("#man, background",{
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 2
       }) ;
      break;

    case 5: // Building with Sun - sun bobs
      gsap.to("#sun", {
        y: "-=20",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut"
      });
      break;

    case 6: // Laptop Scene - table shakes slightly
      gsap.to("#table-plants", {
        rotation: "+=3",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut"
      });
      break;

    case 7: // Man at Table - floating effect
      gsap.to("#man-table, #shelf-books, #window2", {
        y: "+=8",
        repeat: -1,
        yoyo: true,
        duration: 2.5
      });
      break;

    case 8: // Two Boys - playful scale
      gsap.to("#boy, #greenboy", {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "bounce.out"
      });
      break;
  }
}

// Mouse-based parallax (gentle)
window.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const offset = (centerX - e.clientX) / centerX;
  gsap.to(".slide img", {
    x: offset * 10,
    duration: 0.5,
    ease: "power2.out"
  });
});

// Navigation buttons
document.getElementById("prev").addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlides();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlides();
  }
});

updateSlides();

// Music play & mute controls
document.body.addEventListener("click", function startMusic() {
  const music = document.getElementById("bg-music");
  music.volume = 0.3;
  music.play();
  document.body.removeEventListener("click", startMusic);
});

document.getElementById("mute-btn").addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.muted = !music.muted;
  document.getElementById("mute-btn").textContent = music.muted ? "🔇 Unmute" : "🔊 Mute";
  
});
