// const sql = require('mssql');
// const express = require('express'); 
// const app = express(); 
// const PORT = 1443;

// const sqlConfig = {
//   //driver: 'msnodesqlv8',
//   user: 'sa',
//   password: 'Simple@123',
//   server: 'MBITHE\\SQLEXPRESS',
//   database: 'jailBird',
//   options: {
//     trustedConnection: true,
//     encrypt: true,
//     trustServerCertificate: true
//   }
// };

// // Connect to MSSQL
// async function connectToDatabase() {
//   try {
//       await sql.connect(sqlConfig);
//       console.log('Connected to the database successfully!');
//       var request = new sql.Request();
//       request.query('SELECT * FROM jobs',function(err, result){
//         if(err)console.log(err);
//         else console.log(result)
//       })
//       app.get('/api/jobs', (req, res) => {
//         db.collection('jobs').find({}).toArray((err, jobs) => {
//           if (err) throw err;
//           res.json(jobs);
//         });
//       });
      
//   } catch (err) {
//       console.error('Database connection failed:', err);
//   }
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
// }

// connectToDatabase();

const sql = require('mssql');
const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 1443;

const sqlConfig = {
    user: 'sa', 
    password: 'Simple@123', 
    database: 'jailBird',
    server: 'MBITHE\\SQLEXPRESS', 
    options: {
        encrypt: true, // Use true if connecting to Azure
        trustServerCertificate: true // Change to false in production
    }
};

// Enable CORS for all routes
app.use(cors());

// Connect to the database
async function connectToDatabase() {
    try {
        await sql.connect(sqlConfig);
        console.log('Connected to the database successfully!');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

// Define a GET endpoint
app.get('/api/jobs', async (req, res) => {
    try {
        const request = new sql.Request();
        const result = await request.query('SELECT * FROM jobs');
        res.json(result.recordset); // Send the result as JSON
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error executing query');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Connect to the database when the app starts
connectToDatabase();