import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant, updateRestaurant } from './data/restaurants.js';
import { backendRouter } from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api", backendRouter);




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//static pages
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});



//dynamic pages
app.get('/restaurants', (req, res) => {
  const restaurants = getRestaurants(); // Retrieve the list of restaurants
  res.render('restaurants', { restaurants }); // Render the page with restaurant data
});

app.get('/restaurants/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const restaurant = getRestaurant(id);
  if (restaurant) {
    res.render('restaurant-details', { restaurant });  // Corrected the quotes and passing restaurant data
  } else {
    res.status(404).send('Restaurant not found');
  }
});



app.get('/new-restaurant', (req, res) => {
  res.render('new-restaurant');
});


app.get('/restaurants/:id', (req,res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurant = getRestaurant(restaurantId);
  if(restaurant){
    res.render('restaurant-details', { restaurant });
  }
  else{
    res.status(404).send('Restaurant not found');
  }
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});