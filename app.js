const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.set('view engine' , 'ejs');

app.get('/' , (req , res) => {
    res.render('home');
});

app.get('/about' , (req , res) => {
    res.render('about');
});

app.listen(PORT , () => {
            console.log('server started on Port' + PORT);
    }
); 

// STEPS
// 1. heroku login
// 2. heroku create
// 3. git add .
// 4. git commit -m "committing changes"
// 5. git push heroku master
// 6. changes have been deployed
