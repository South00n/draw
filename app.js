const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//context -> 붓 호출, ctx.beginPath경로 재 설정, ctx.rect 선만들기
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
  "#ffcdd2",
  "#f8bbd0",
  "#e1bee7",
  "#d1c4e9",
  "#c5cae9",
  "#bbdefb",
  "#b3e5fc",
  "#b2ebf2",
  "#b2dfdb",
  "#c8e6c9",
  "#dcedc8",
  "#f0f4c3",
  "#fff9c4",
];
function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
