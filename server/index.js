const client = require("./twit");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CANADA = 23424775
//INDIA = 23424848
//INDIA = 4118

app.get("/trends", async (req, res) => {
  try {
    console.log("inside api call");
    var id = req.query["id"];
    console.error(id);
    const data = await getTweets(id);
    const rawTrendData = data[0];
    res.send(rawTrendData.trends);
  } catch (e) {
    console.error(e);
  }
});
app.get("/", async (req, res) => {
  try {
    res.send({
      express:
        "Local server running on port 5000 serving requests to Twitter-Trends",
    });
  } catch (e) {
    console.error(e);
  }
});
// Start the server on port 5000
function getTweets(id) {
  return new Promise((resolve, reject) => {
    let params = {
      id: id,
    };
    client.get("trends/place", params, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
