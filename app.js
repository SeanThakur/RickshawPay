import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//bodyParser

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//midleware

app.use(express.json());

//Router
app.get("/", (req, res) => {
  res.json({status: "Routes Loading Successfully"})
});

//Port to listen

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});