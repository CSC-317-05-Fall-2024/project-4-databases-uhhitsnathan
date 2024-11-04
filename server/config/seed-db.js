/* Initialize the data in the DB */
import { pool } from './database.js';

const dropTables = async () => {
    try {
        console.log('dropping tables...');
        const dropTablesQuery = `
            DROP TABLE IF EXISTS restaurants;
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => {
    try {
        console.log('creating restaurants...');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS restaurants (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                address TEXT NOT NULL,
                photo TEXT
            );
        `;
        await pool.query(createQuery);
        console.log('created restaurants');
    } catch (error) {
        console.log(error)
    }
}

const insertData = async () => {
    try {
        console.log('adding initial data...');
        const insertQuery = `
    INSERT INTO restaurants (name, phone, address, photo)
    VALUES 
        ('Mom Can Cook Thai Kitchen', '(661) 251-8103', '18358 Soledad Canyon Rd, Santa Clarita, CA 91387', '/images/download.jpeg'),
        ('Toppers Pizza', '(661) 222-7888', '8417 Soledad Canyon Rd, Santa Clarita, CA 91387', '/images/toppers.jpeg'),
        ('Gyromania', '(661) 252-4976', '20655 Soledad Canyon Rd, Santa Clarita, CA 91351', '/images/gyro.jpeg'),
        ('The Stand', '(661) 339-2333', '24201 Valencia Blvd Suite 3260, Valencia, CA 91355', '/images/stand.jpeg'),
        ('Charcoal Korean BBQ', '(661) 251-9292', '19158 Soledad Canyon Rd, Canyon Country, CA 91351', '/images/charcoal2.jpg'),
        ('Marston''s Restaurant', '(661) 253-9910', '24011 Newhall Ranch Rd, Valencia, CA 91355', '/images/martsons3.jpeg'),
        ('Chi-Chis Pizza', '(661) 252-4405', '27117 Sierra Hwy, Canyon Country, CA 91351', '/images/chi.jpeg'),
        ('IN-N-Out Burger', '(800) 786-1000', '28368 Sand Canyon Rd, Santa Clarita, CA 91351', '/images/out3.jpeg'),
        ('Bonsai Sushi Garden', '(661) 251-9008', '19358 Soledad Canyon Rd, Santa Clarita, CA 91351', '/images/bonsai.jpg');
`;

        await pool.query(insertQuery);
    } catch (error) {
        console.log(error);
    }
}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();
