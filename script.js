let currentStep = 1;
let noCount = 0;

function nextStep() {
  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step${currentStep}`).classList.add("active");
}

function correct() {
  nextStep();
}

function wrong() {
  alert("Wrong answer 😆 but I forgive you 💕");
}

const noMessages = [
  "NO?? Bold of you 😏",
  "That button has attitude 😆",
  "Try again, Bugiii 🐞",
  "My heart just did a dramatic fall 💔",
  "Okay now you’re just teasing 😜",
  "This is getting personal 😭",
  "Still no?? Wow confidence 💀😆"
];

document.getElementById("noBtn").addEventListener("click", () => {
  alert(noMessages[noCount % noMessages.length]);
  noCount++;
});

document.getElementById("yesBtn").addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="padding:50px; text-align:center;">
      <h1>YAYYYY 😭💖</h1>
      <p>Bugiii 🐞 you survived all the questions.</p>
      <p>More hearts 💕 more kisses 😘 more us.</p>
      <h2>Happy Valentine’s Day 💘</h2>
    </div>
  `;
});
