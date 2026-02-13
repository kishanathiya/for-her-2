// ----------------------------
// Animate elements on scroll
// ----------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document
  .querySelectorAll(".fade-up, .fade-left, .line")
  .forEach((el) => observer.observe(el));


// ----------------------------
// Hero animation on load
// ----------------------------
window.addEventListener("load", () => {
  document.querySelector(".hero-title")?.classList.add("show");
  document.querySelector(".hero-subtitle")?.classList.add("show");
});


// ----------------------------
// Typewriter Letter
// ----------------------------
const letter = `Suprit,

From the moment I met you, something quietly changed inside me.
The world felt softer, brighter, and somehow more meaningful.
Your smile became my favorite place, your presence my peace.

This isn’t just some random feeling — 
this is me choosing you, every single day.
Through laughter, through chaos, through dreams, 
and through time itself…

I never needed anything more.
Even in silence, even in distance,
even in the moments I didn’t understand…

I'm long gone with my longings, with my stupid things,
with your last words,
with the moment when I saw you last & that moment. Only if I knew.

I missed you every single day.

Only how precious those moments were.
"Do you memorize every little thing I've ever said?"
"Yes"
"You broke me." Everything changed but one thing never did.

No matter how life twists,
no matter how time changes things…

"I love you. I will never not love you."

Some feelings never learned how to disappear.

– K`;

let i = 0;
const typed = document.getElementById("typed");

function typeWriter() {
  if (typed && i < letter.length) {
    typed.innerHTML += letter.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();


// ----------------------------
// Final Message Button
// ----------------------------
const primaryBtn = document.querySelector(".primary");
const finalMsg = document.querySelector(".final-msg");

if (primaryBtn && finalMsg) {
  primaryBtn.addEventListener("click", () => {
    finalMsg.classList.add("show");
  });

// ----------------------------
// Scroll Cinematic Parallax
// ----------------------------
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  document.querySelectorAll(".parallax").forEach((el) => {
    const speed = el.dataset.speed || 0.15;

    const y = scrolled * speed;
    const opacity = Math.max(1 - scrolled / 900, 0.2);
    const scale = 1 - scrolled / 4000;

    el.style.transform = `translateY(${y}px) scale(${scale})`;
    el.style.opacity = opacity;
  });
});

}


