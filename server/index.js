const client = require("./twit");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CANADA = 23424775
//INDIA = 23424848
//INDIA = 4118

app.get('/api/trends', async (req, res) => {
  try{
    const data = await getTweets("4118");
    const rawTrendData = data[0];
      res.send(
          rawTrendData.trends
       );
  }catch(e){
    console.error(e);
}  
});
// Start the server on port 5000
function getTweets(id) {
    return new Promise((resolve,reject) =>{
        let params = {
            id: id
        };
        client.get('trends/place',params, (err,data) => {
            if(err) {
            return reject(err);
            }
            return resolve(data);
          });
    
    });
  }
   
  app.listen(port, () => console.log(`Listening on port ${port}`));
  