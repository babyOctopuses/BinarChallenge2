const express= require('express')
const morgan = require('morgan')
let posts = require('./posts.json')
const authRouter= require('./router/authRouter');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(3000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(authRouter);

app.get('/', (req, res)=>{
    res.render('index');
})



