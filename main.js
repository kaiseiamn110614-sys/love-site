// 表情差分なし：セリフだけ増やしていけばOK
const script = [
  { name: "？？？", text: "……ねえ。" },
  { name: "？？？", text: "放課後、少しだけ時間ある？" },
  { name: "彼女", text: "今日ね、君に言いたいことがあるの。" },
  { name: "彼女", text: "……ちゃんと聞いてくれる？" },
];

let i = 0;

const nameEl = document.getElementById("name");
const textEl = document.getElementById("text");
const nextBtn = document.getElementById("next");
const msgBox = document.getElementById("msgBox");

function render() {
  const s = script[i];
  nameEl.textContent = s.name ?? "";
  textEl.textContent = s.text ?? "";
}

function next() {
  i++;
  if (i >= script.length) i = 0; // 最後まで行ったら最初に戻る（後でEND演出に変えられる）
  render();
}

// ▼で次へ
nextBtn.addEventListener("click", next);

// 枠タップでも次へ（スマホ向け）
msgBox.addEventListener("click", (e) => {
  if (e.target === nextBtn) return; // 二重進行防止
  next();
});

// PC操作
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") next();
});

render();
