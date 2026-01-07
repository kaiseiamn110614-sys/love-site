const lines = [
  "……ねえ。",
  "少しだけ、話してもいい？",
  "今日は、ずっと君を探してたんだ。",
  "ねぇ、ほしくん、好きだよ。"
];

let i = 0;
const text = document.getElementById("text");
const btn = document.getElementById("next");

btn.onclick = () => {
  i++;
  if (i >= lines.length) i = 0;
  text.textContent = lines[i];
};
