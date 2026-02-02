// Love notes rotation
const notes = [
  "Bugiii 🐞 you make my heart go boom boom 💕💥",
  "If kisses were stars 😘✨ I’d give you the sky",
  "You are my favorite thought 💖",
  "Warning: thinking about you too much 😆💕",
  "Soft heart, silly smile — that’s you Bugiii 🐞💓"
];

let noteIndex = 0;
function nextNote() {
  document.getElementById("loveNote").innerText = notes[noteIndex];
  noteIndex = (noteIndex + 1) % notes.length;
}

// Funny NO reactions
const noMessages = [
  "Excuse me 😭 try again",
  "Bugiii that button is broken 😆",
  "No is not an option 😜",
  "My heart just fell 💔 pick it up",
  "Nice joke 😏 now press YES"
];

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("click", () => {
  const msg = noMessages[Math.floor(Math.random() * noMessages.length)];
  alert(msg);
});

// YES ending
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="padding:40px;">
      <h1>YAYYYY 😭💖</h1>
      <p>Bugiii 🐞 you just made me the happiest.</p>
      <p>This is our little Valentine story 💌</p>
      <p>More laughs, more love, more us 😘💕</p>
      <h2>Happy Valentine’s Day 💘</h2>
    </div>
  `;
});
