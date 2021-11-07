import express from "express";
import axios from "axios";

//initializations
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//routes
app.get("/", (req, res) => {
  //get the data from fakestore api
  console.log("Getting data from fakestore api...");
  axios
    .get("https://fakestoreapi.com/products?limit=6")
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});


//listen
app.listen(port, () => console.log(`Listening to port ${port}`));
