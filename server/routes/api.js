import express from 'express';
import { getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from '../data/restaurants.js';
const router = express.Router();

// Add routes here

router.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.status(200).json(restaurants); // Send the list of restaurants as JSON
});



router.post('/restaurants', (req, res) => {
    console.log(req.body);
    const restaurantData = req.body;
    try{
        const restaurant = createRestaurant(restaurantData);
        res.status(200).json(restaurant);
    }catch(error){
        console.log(error);
        res.status(500).json({ "message": `${error}` });
    }
});

router.patch('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const restaurantData = req.body; // Data to update the restaurant

    try {
        const updatedRestaurant = updateRestaurant(id, restaurantData);
        if (!updatedRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.status(200).json(updatedRestaurant); // Return the updated restaurant
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `${error}` }); // Handle errors
    }
});


router.delete('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id); // Get the restaurant ID from the route parameter
    try {
        const deletedRestaurant = deleteRestaurant(id);
        res.status(200).json(deletedRestaurant); // Respond with the deleted restaurant details
    } catch (error) {
        res.status(500).json({ "message": `${error}` }); // Handle any unexpected errors
    }
});



export {router as backendRouter};