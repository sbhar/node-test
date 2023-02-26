const weatherData = require('./src/app/weather')
const news = require('./src/app/news')
const map = require('./src/app/map')
const cors = require('cors')
const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
app.use(express.static('myweather'));
app.use(express.json())
app.use(cors({
  origin: '*'
}));
app.use('/myweather', router)
const port = process.env.PORT != null ? process.env.PORT : 3000

app.get('/', async function (req, res) {
  res.send('Welcome to the news and weather API')
})

app.get('/weather', async function (req, res) {
  let responseData = await weatherData.getWeather()
  res.status(responseData.status).send(responseData.data)
})

app.get('/news', async function (req, res) {
  let responseData = await news.fetchNews()
  res.status(responseData.status).send(responseData.data)
})

app.get('/map', async function (req, res) {
  let responseData = await news.fetchMap()
  res.status(responseData.status).send(responseData.data)
})


app.get('*', (req, res)=> {
  const index = path.join(__dirname, '/', 'index.html' );
  res.sendFile(index);
});


// database
const db = require("./src/app/models");
const Role = db.role;


db.sequelize.sync()
  .then(() => {
    initial();
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get('/', async function (req, res) {
  res.send('Welcome to the news and weather API')
})

// routes

// routes
require('./src/app/routes/auth.routes')(app);
require('./src/app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}


