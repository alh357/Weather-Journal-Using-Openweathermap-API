const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "ab5981a200be1dd7c07fc913215a3336";
const express = require("express");
const app = express();
const port = 8000;
const data = [];
const cors = require("cors");
let zipCode = "";

//app.set("viee engine", "ejs");
app.use(express.json());
app.use(cors());
app.use(express.static("demo"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// app.post("/signup", function (req, res) {
//   id = data.length + 1;
//   data.push(req.body);
//   //console.log(data);
//   req.body[Object.keys(req.body)[0]].id = id;
//   res.json({ status: "Movie added Successfully" });
//   console.log(req.body[Object.keys(req.body)[0]]);
//   //res.sendFile(__dirname + "/views/home.html");
// });
// app.get("/signup", (req, res) => {
//   res.sendFile(__dirname + "/views/signup.html");
// });

// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "/views/login.html");
// });

const projectData = {};
const projectData1 = {};
app.post("/zip", async (req, res) => {
  const id = req.body.id;

  zipCode = req.body.zip;
  let getData = await getWeatherData(baseUrl, zipCode, apiKey);
  if (getData) {
    if (getData.cod === 200) {
      const respons = {
        weath: getData.weather[0],
        name: getData.name,
        status: getData.cod,
        note: req.body.feeli,
        main: getData.main,
        country: getData.sys.country,
      };

      projectData[id] = respons;

      res.json(projectData);
    } else {
      projectData1[id] = { status: "Error: Check spelling or Network" };
      res.json(projectData1);
    }
  }
  //  console.log(getData);
  console.log("done");

  //console.log(`${baseUrl}?q=${zipCode}&appid=${apiKey}`);
  //console.log(zipCode);
});

const getWeatherData = async (baseUrl, zipCode, apiKey) => {
  try {
    let data;
    const res = await fetch(`${baseUrl}?q=${zipCode}&appid=${apiKey}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return {
      cod: 500,
      message:
        "Unable to fetch weather data. Please check your connection and try again.",
    };
  }
};

const server = app.listen(port, () => {
  console.log("running");
});
