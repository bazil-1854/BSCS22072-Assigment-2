const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const csvParser = require('csv-parser');
const app = express();
const PORT = 3000;
 
app.use(bodyParser.json());
 
app.get('/hello/Bazil', (req, res) => {
    res.send('Hello, Bazil');
});

app.post('/profile', (req, res) => {
    const { Name, Title, TargetedKeywords, Education, Certification, Contact } = req.body;
 
    if (!Name || !Title || !TargetedKeywords || !Education || !Certification || !Contact) {
        return res.status(400).json({ error: 'All fields are required: Name, Title, Targeted Keywords, Education, Certification, and Contact' });
    } 

    const professionalProfile = {
        Name,
        Title,
        TargetedKeywords,
        Education,
        Certification,
        Contact,
    };
 
    fs.readFile('profiles.json', (err, data) => {
        let profiles = [];
        if (!err && data.length > 0) {
            profiles = JSON.parse(data);
        }
        profiles.push(professionalProfile); 
        
        fs.writeFile('profiles.json', JSON.stringify(profiles, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save profile' });
            }
            res.status(201).json({ message: 'Profile saved successfully', profile: professionalProfile });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
