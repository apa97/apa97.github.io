// SVG Visualtion - Bar Chart
const data = [40, 70, 55, 90, 60];
const chart = document.getElementById("chart");
const width = chart.clientWidth;
const barWidth = width / data.length;

data.forEach((value, index) => {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", index * barWidth);
  rect.setAttribute("y", 300 - value * 2);
  rect.setAttribute("width", barWidth - 10);
  rect.setAttribute("height", value * 2);
  rect.setAttribute("fill", "#CDBCAB");
  chart.appendChild(rect);
});

// SVG Art - Random Generated Circles
const art = document.getElementById("art");

for (let i = 0; i < 20; i++) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", Math.random() * 600);
  circle.setAttribute("cy", Math.random() * 300);
  circle.setAttribute("r", Math.random() * 30 + 5);
  circle.setAttribute("fill",`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`);
  art.appendChild(circle);
}
