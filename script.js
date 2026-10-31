const canvas = document.querySelector("#space");
const context = canvas.getContext("2d");
const glow = document.querySelector(".cursor-glow");
const scene = document.querySelector(".hero-scene");
const menu = document.querySelector(".menu");
const navigation = document.querySelector(".topbar nav");
const projectCards = document.querySelectorAll(".project");
const particles = [];
let width = 0;
let height = 0;
let pointerX = 0;
let pointerY = 0;

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.scale(devicePixelRatio, devicePixelRatio);
  particles.length = 0;
  for (let index = 0; index < Math.min(130, window.innerWidth / 8); index += 1) {
    particles.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, radius: Math.random() * 1.6 + .3, speed: Math.random() * .22 + .05, alpha: Math.random() * .65 + .15 });
  }
}

function drawSpace() {
  context.clearRect(0, 0, width, height);
  particles.forEach((particle) => {
    particle.y -= particle.speed;
    if (particle.y < -5) particle.y = height + 5;
    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(131, 229, 220, ${particle.alpha})`;
    context.fill();
  });
  requestAnimationFrame(drawSpace);
}

window.addEventListener("resize", resize);
window.addEventListener("pointermove", (event) => {
  pointerX = (event.clientX / window.innerWidth - .5) * 2;
  pointerY = (event.clientY / window.innerHeight - .5) * 2;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
  if (window.innerWidth > 750) scene.style.transform = `translate(${pointerX * -12}px, ${pointerY * -10}px)`;
});
menu?.addEventListener("click", () => navigation.classList.toggle("open"));
navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => navigation.classList.remove("open")));
projectCards.forEach((card) => {
  const visual = card.querySelector(".project-visual");
  card.addEventListener("pointermove", (event) => {
    if (window.innerWidth <= 750) return;
    const bounds = card.getBoundingClientRect();
    const rotateX = ((event.clientY - bounds.top) / bounds.height - .5) * -8;
    const rotateY = ((event.clientX - bounds.left) / bounds.width - .5) * 10;
    visual.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("pointerleave", () => {
    visual.style.transform = "";
  });
});
resize();
drawSpace();
