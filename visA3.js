// Visualization 1 Global Sales by Genre & Platform
vegaEmbed("#vis1", {
  title: "Global Sales by Platform",
  data: { url: "data/videogames_wide.csv" },
  mark: "bar",
  encoding: {
    x: { field: "Platform", type: "nominal", sort: "-y"},
    y: {aggregate: "sum",field: "Global_Sales", type: "quantitative"},
    color: { field: "Platform", type: "nominal" },
    tooltip: [
      { field: "Platform", type: "nominal" },
      { aggregate: "sum", field: "Global_Sales", type: "quantitative" }
    ]
  },
  width: 700,
  height: 400
});

// Visualization 2 Sales Over Time by Platform
vegaEmbed("#vis2", {
  title: "Global Video Game Sales Over Time",
  data: { url: "data/videogames_wide.csv" },
  mark: { type: "line", point: true },
  encoding: {
    x: { field: "Year", type: "temporal"},
    y: { aggregate: "sum", field: "Global_Sales", type: "quantitative"},
    tooltip: [
      { field: "Year", type: "temporal" },
      { aggregate: "sum", field: "Global_Sales", type: "quantitative" }
    ]
  },
  width: 700,
  height: 400
});

// Visualization 3 Regional Sales by Platform
vegaEmbed("#vis3", {
  title: "Regional Sales by Platform",
  data: { url: "data/videogames_wide.csv" },
  transform: [ // the long videogame dataset just isn't working
    { 
      fold: ["NA_Sales", "EU_Sales", "JP_Sales", "Other_Sales"],
      as: ["Region", "Sales"]
    }
  ],
  mark: "bar",
  encoding: {
    x: { field: "Platform", type: "nominal"},
    y: { aggregate: "sum", field: "Sales", type: "quantitative"},
    color: { field: "Region", type: "nominal"},
    tooltip: [
      { field: "Platform", type: "nominal" },
      { field: "Region", type: "nominal" },
      { aggregate: "sum", field: "Sales", type: "quantitative" }
    ]
  },
  width: 700,
  height: 400
});

// Visualization 4 Visual Story: Top Genres Globally
vegaEmbed("#vis4", {
  title: "Visual Story: Top Genres Globally",
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
  width: 700,
  height: 400
});