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

// -------------------------------------------------------------------------


// Visualization 1 - Global Sales by Genre & Platform
vegaEmbed("#vis1", {
  data: { url: "data/videogames_wide.csv" },
  mark: "bar",
  encoding: {
    x: { field: "Platform", type: "nominal" },
    y: { aggregate: "sum", field: "Global_Sales", type: "quantitative" },
    color: { field: "Genre", type: "nominal" },
    tooltip: [
      { field: "Platform", type: "nominal" },
      { field: "Genre", type: "nominal" },
      { field: "Global_Sales", type: "quantitative" }
    ]
  },
  width: "container",
  height: 400
});

// Visualization 2 - Sales Over Time by Platform
vegaEmbed("#vis2", {
  data: { url: "data/videogames_wide.csv" },
  mark: "line",
  encoding: {
    x: { field: "Year", type: "ordinal" },
    y: { aggregate: "sum", field: "Global_Sales", type: "quantitative" },
    color: { field: "Platform", type: "nominal" },
    tooltip: [
      { field: "Year", type: "ordinal" },
      { field: "Platform", type: "nominal" },
      { field: "Global_Sales", type: "quantitative" }
    ]
  },
  width: "container",
  height: 400
});

// Visualization 3 - Regional Sales by Platform
vegaEmbed("#vis3", {
  data: { url: "data/videogames_long.csv" },
  mark: "bar",
  encoding: {
    x: { field: "Platform", type: "nominal" },
    y: { aggregate: "sum", field: "Sales", type: "quantitative" },
    color: { field: "Region", type: "nominal" },
    tooltip: [
      { field: "Platform", type: "nominal" },
      { field: "Region", type: "nominal" },
      { field: "Sales", type: "quantitative" }
    ]
  },
  width: "container",
  height: 400
});

// Visualization 4 - Visual Story: Top Genres Globally
vegaEmbed("#vis4", {
  data: { url: "data/videogames_wide.csv" },
  mark: "bar",
  encoding: {
    y: { field: "Genre", type: "nominal" },
    x: { aggregate: "sum", field: "Global_Sales", type: "quantitative" },
    color: { field: "Genre", type: "nominal" },
    tooltip: [
      { field: "Genre", type: "nominal" },
      { field: "Global_Sales", type: "quantitative" }
    ]
  },
  width: "container",
  height: 400
});
