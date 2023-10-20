const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

const isHabitat = (data) =>
  data["koi_disposition"] === "CONFIRMED" &&
  data["koi_insol"] > 0.36 &&
  data["koi_insol"] < 1.11 &&
  data["koi_prad"] < 1.6;

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => isHabitat(data) && results.push(data))
  .on("error", (err) => console.log(err))
  .on("end", () => {
    console.log(results.length);
    console.log("end");
  });
