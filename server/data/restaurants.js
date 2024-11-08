import { pool } from '../config/database.js';


// Get a list of restaurants
const getRestaurants = async () => {
    try{
        const results = await pool.query('SELECT * FROM restaurants ORDER BY id ASC');
        return results.rows;
    }catch(error){
        console.error(error.message);
    }
};


// Get a restaurant by id
const getRestaurant = async (id) => {
    try{
        const results = await pool.query('SELECT * FROM restaurants WHERE id=$1 ORDER BY id ASC', [id]);
        return results.rows[0];
    }catch(error){
        console.error(error.message);
    }
};

// Create a new restaurant entry
const createRestaurant = async (data) => {
    try{
        const { name, phone, address, photo } = data;
        const results = await pool.query('INSERT INTO restaurants ( name, phone, address, photo) VALUES ($1, $2, $3, $4) RETURNING *', [name, phone, address, photo]);
        console.log(results);
        return results.rows[0];
   }catch(error){
    console.error(error.message);
   }
};

const updateRestaurant = async (id, data) => {
    try{
        const query = await pool.query('SELECT * FROM restaurants WHERE id = $1', [id]);
        const current = query.rows[0];
        let updatedData = {
            ...current,
            ...data
        }
        const { name, phone, address, photo } = updatedData;
        const results = await pool.query('UPDATE restaurants SET name = $1, phone = $2, address = $3, photo = $4 WHERE id = $5 RETURNING *', [name, phone, address, photo, id]);
        console.log(results.rows);
    }catch(error){
        console.error(error.message);
    }
};



// Delete a restaurant by id
const deleteRestaurant = async (id) => {
    try{
        const results = await pool.query('DELETE FROM restaurants WHERE id = $1', [id]);
        return results.rows;
    }catch(error){
        console.error(error.message);
    }
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant, updateRestaurant };