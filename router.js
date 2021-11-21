const express = require('express')
const router = express.Router()
const fs= require('fs');
const {user_game} = require('./models');
let posts = require('./posts.json');
let use=[];

router.use(express.static('public'));

// router.use('/',(req, res)=>{
//     res.render('register');
// })



router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/home', (req, res)=>{
    res.render('index')
})

router.get('/signup', (req, res)=>{
    res.render('signup')
})

// POST an article
router.post('/signup', (req,res)=>{
    user_game.create({
        username:req.body.username,
        password:req.body.password,
    })
    .then(user_game=>{
        res.status(201).json(user_game);
        // res.redirect('/home')
    }).catch(err=>{
        res.status.apply(422).json(`Can't create user`)
    })
})

router.get('/game', (req, res)=>{
    res.render('game')
})

router.get('/register',(req, res)=>{
    res.render('register');
})

//api router
router.post('/api/register', (req, res)=>{
    const {username, password, nama_lengkap} = req.body;
    user.push({username, password, nama_lengkap})
    fs.writeFile('./posts.json', user,()=>{
        console.log('data changed')
    })
    res.redirect('/home');
})

// api router
router.get('/api/posts/', (req, res)=>{
    res.status(200).json(posts);
})

router.get('/api/posts/:id', (req, res)=>{
    const post = posts.find(i => i.id === +req.params.id)
    res.status(200).json(post);
})

router.post('/api/posts', (req, res)=>{
    const {username, password, nama_lengkap} = req.body;
    const id = posts[posts.length -1].id+1
    const post={
      id:id,
      username:username,  
      password:password,
      name_lengkap: nama_lengkap,  
    }
    posts.push(post)
    res.status(201).json(post);
  })

router.delete('/api/posts/:id', (req, res)=>{
    posts = posts.filter(i => i.id !== +req.params.id)
    res.status(200).json({
        message:`Post dengan id ${req.params.id} sudah berhasil di hapus`
    })
})

// router.get('/login', (req, res)=>{
//     let userAccess=req.params;
//     console.log('req.body', req)
//     let post=posts;
//     console.log('post', post)
//     let userName = post.find(x=>x.username===userAccess.username)
//     console.log('userName', userName)

//         if(userAccess.username == userName.username){
//             if(userAccess.password ===userName.password){
//                 res.json(`Login berhasil Username: ${userAccess.username}, nama_lengkap: ${userName.nama_lengkap}`)
//             }
//             else{
//                 res.json('Password yang dimasukkan salah')
//             }
//         }else{
//             res.json('invalid username')
//         }
// })

router.post('/login', (req, res)=>{
    let userAccess=req.body;
    let post=posts;
    let userName = posts.find(x=>x.username===userAccess.username)
    let userPass = posts.find(x=>x.password===userAccess.password)
        if(!userName){
            res.json("Username tidak ditemukan");
        }
        else if(userName && !userPass){
            res.json("Silakan masukan pastword yang benar");
        }
        else{
            res.json(`${userName.nama_lengkap} login dengan username: ${userName.username} dan password: ${userName.password}`);
        }    
    // if(userAccess.username == userName.username){
        //     if(userAccess.password ===userName.password){
        //         res.json(`Login berhasil Username: ${userAccess.username}, nama_lengkap: ${userName.nama_lengkap}`)
        //     }
        //     else{
        //         res.json('Password yang dimasukkan salah')
        //     }
        // }else{
        //     res.json('invalid username')
        // }

    // {
    //     username:username,  
    //     password:password,  
    // }
    // post.forEach(item => {
    //     if(userAccess.username == item.username){
    //         console.log('userAccess', userAccess.username)
    //         console.log('username', item.username)
    //         console.log('username matches')
    //         res.json(userAccess.username)
    //         if(userAccess.password ===item.password){
    //             console.log('password', item.password)
    //             res.json(userAccess.password)
    //         }
    //         else{
    //             res.json('Password yang dimasukkan salah')
    //         }
    //     }
    // })


    
})
    
    // const {username, password} = req.body;
    // let userName = posts.find(x=>x.username===username)
    // console.log("userNAme", userName)
    // let userPassword = userName.password === password
    // if(userName){
    //     res.json(userName)
    // }else if(userName && !userPassword){
    //     res.json("Password Salah")
    // }else{
    //     res.json("Email not found")
    // } 


// router.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html', {root:__dirname});
// res.status(404).render('index');
// })

module.exports = router;