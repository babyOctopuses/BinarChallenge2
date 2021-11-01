const express= require('express')
const morgan = require('morgan')
let posts = require('./posts.json')
const router= require('./router');

const app = express();

app.set('view engine', 'ejs');
app.listen(3000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(router);

app.get('/', (req, res)=>{
    res.render('index');
})



