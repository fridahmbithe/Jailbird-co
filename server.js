const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3300; 

const sqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Simple@123',
    database: 'jailBird',
};

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Create a connection to the database
const connection = mysql.createConnection(sqlConfig);

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database successfully!');
});

// GET endpoint
app.get('/api/jobs', (req, res) => {
    const query = 'SELECT * FROM jobs'; // Define query

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Error executing query');
        }
        res.json(results); // Send the result as JSON
    });
});

// POST endpoint
app.post('/api/jobs', (req, res) => {
    const { companyName, position, description, role, languages, readMoreUrl, postedAt } = req.body;

    // SQL query to insert a new job
    const query = `
        INSERT INTO jobs (companyName, position, description, role, languages, readMoreUrl, postedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(query, [companyName, position, description, role, languages, readMoreUrl, postedAt], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error inserting data');
        }
        res.status(201).json({ message: 'Job added successfully!', jobId: results.insertId });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});