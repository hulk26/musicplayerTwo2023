const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
const bodyParser = require('bodyParser');
const interceptor = require('express-interceptor')


app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json());






app.get('/', function (req, res){
    fs.readFile('items.json', function(error, data){
        if (error) {
            res.status(500).end()
        } else {
            res.render('muzic', {
                items: JSON.parse(data)
            })
        }
    })
})


app.listen(3000,(req,res)=>{
console.log("server running on port 3000 ");
})


