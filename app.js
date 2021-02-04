const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", function(req, res){
    res.render('index');
});

app.get("/contact", function(req, res){
    res.render('contact', {qs: req.query});
});

app.post("/contact", urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get("/profile/:name", function(req, res){
    console.log(req.params);

    const data = {
        name : req.params.name,
        age: 26,
        job: 'Software Engineer',
        hobbies: ['Reading', 'Writing', 'History', 'Poetry', 'Sketching', 'Painting']
    };
    
    res.render('profile', {data: data});
});

const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));