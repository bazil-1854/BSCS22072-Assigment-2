const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const csvParser = require('csv-parser');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Handle GET request to /hello/amjad
// We use GET method here as it is retrieving information
app.get('/hello/Bazil', (req, res) => {
    res.send('Hello, Bazil');
});

// Handle POST request to /profile to accept ProfessionalProfile
// We use POST as we are receiving and processing data
app.post('/profile', (req, res) => {
    const { Name, Title, TargetedKeywords, Education, Certification, Contact } = req.body;

    // Check if all required fields are present
    if (!Name || !Title || !TargetedKeywords || !Education || !Certification || !Contact) {
        return res.status(400).json({ error: 'All fields are required: Name, Title, Targeted Keywords, Education, Certification, and Contact' });
    }

    // Create the ProfessionalProfile object
    const professionalProfile = {
        Name,
        Title,
        TargetedKeywords,
        Education,
        Certification,
        Contact,
    };

    // Append to a JSON file
    fs.readFile('profiles.json', (err, data) => {
        let profiles = [];
        if (!err && data.length > 0) {
            profiles = JSON.parse(data); // Parse existing data
        }
        profiles.push(professionalProfile); // Add new profile

        // Write updated profiles back to file
        fs.writeFile('profiles.json', JSON.stringify(profiles, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save profile' });
            }
            res.status(201).json({ message: 'Profile saved successfully', profile: professionalProfile });
        });
    });
});

// Handle GET request to /profiles to return a list of profiles from a CSV file
// We use GET method here to retrieve data
app.get('/profiles', (req, res) => {
    const profiles = [];
    
    // Read the CSV file and parse it
    fs.createReadStream('profiles.csv')
        .pipe(csvParser())
        .on('data', (row) => {
            profiles.push(row); // Add each row from the CSV to profiles array
        })
        .on('end', () => {
            res.status(200).json(profiles); // Return the profiles
        })
        .on('error', (err) => {
            res.status(500).json({ error: 'Failed to read profiles CSV file' });
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
