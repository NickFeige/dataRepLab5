const express = require('express')
const app = express()
const port = 4000

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//using a request than responding 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//setting up a prameter
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name)
  res.send('Hello'+req.params.name);
})
//setting up a api for books
app.get('/api/book',(req,res)=>{
    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];
        //sending it with json
    res.status(200).json({myBooks:data,
        "message":"hello from server"
    });  
  })
  //connecting a local html
  app.get('/test',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
//getting the passing 
app.get('/name',(req,res)=>{
    res.send('hello '+req.query.fname+' '+req.query.lname)
})
//body post 
app.post('/name',(req,res)=>{
    res.send('hello post'+req.body.fname)
})

app.get('/whatever',(req,res)=>{
  res.send('good bye')
})
app.get('/datarep',(req,res)=>{
  res.send('datarep 2023')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})