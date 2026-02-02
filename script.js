// Countdown Timer
const countdown = document.getElementById("countdown");
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdown.innerHTML = `⏳ ${days} days left for Valentine 💖`;
}, 1000);

// Funny NO button
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// YES button action
yesBtn.addEventListener("click", () => {
  alert("💌 Yay! I knew you’d say YES 😭💖");

  document.body.innerHTML = `
    <h1>Are you REALLY sure? 😏</h1>
    <button onclick="finalYes()">ABSOLUTELY YES 😍</button>
  `;
});

// Final Page
function finalYes() {
  document.body.innerHTML = `
    <h1>HAPPY VALENTINE'S DAY 💖</h1>
    <img src="https://media.giphy.com/media/l0MYyDa8S9ghzNebm/giphy.gif" width="250">
    <p>You’re stuck with me now 😆💕</p>
  `;
}
function finalYes() {
  document.body.innerHTML = `
    <div style="padding:40px; text-align:center;">
      <h1>For You, Bugiii 🐞💖</h1>
      <p>I don’t promise perfection.</p>
      <p>But I promise laughs, care, and choosing you every day.</p>
      <p>You’re my favorite person, today and always.</p>
      <h2>Happy Valentine’s Day 💘</h2>
    </div>
  `;
}
