const screens = [...document.querySelectorAll(".screen")];
const homeBtn = document.getElementById("homeBtn");
const audio = document.getElementById("audio");

function show(id) {
  screens.forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function startGift() {
  show("loadingScreen");
  const bar = document.getElementById("progressBar");
  let n = 0;
  const timer = setInterval(() => {
    n += Math.random() * 10;
    if (n >= 100) {
      n = 100;
      clearInterval(timer);
      setTimeout(() => show("menuScreen"), 450);
    }
    bar.style.width = n + "%";
  }, 180);
}

function finishLoading() {
  show("menuScreen");
}

function ignoreGift() {
  startGift();
}

function openPage(id) {
  show(id);
  homeBtn.classList.remove("hidden");
}

function goHome() {
  show("menuScreen");
  homeBtn.classList.add("hidden");
}

function toggleMusic() {
  const btn = document.getElementById("musicBtn");
  if (audio.paused) {
    audio.play().then(() => btn.textContent = "❚❚ Pause my song").catch(() => {
      alert("Add your music file as music.mp3 in the same folder as this website.");
    });
  } else {
    audio.pause();
    btn.textContent = "▶ Play my song";
  }
}

function openGiftBox() {
  const box = document.getElementById("giftBox");
  box.textContent = "💖";
  document.getElementById("surpriseTitle").textContent = "My favorite gift is you.";
  document.getElementById("surpriseText").textContent =
    "No matter how many birthdays come, I hope I get to celebrate more of them with you. Happy birthday, my love! ♡";
  burstHearts();
}

function burstHearts() {
  for (let i = 0; i < 30; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = ["♡","♥","💗","✨"][Math.floor(Math.random()*4)];
    h.style.left = Math.random()*100 + "vw";
    h.style.bottom = (5 + Math.random()*20) + "vh";
    h.style.animationDelay = Math.random()*.8 + "s";
    document.getElementById("hearts").appendChild(h);
    setTimeout(() => h.remove(), 3500);
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") goHome();
});
