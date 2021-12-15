const express = require('express')
const router = express.Router()
const {user_game} = require('./models');

router.use(express.static('public'));


//GET Methods
router.get('/', authController.gethome)


router.get('/home', (req, res)=>{
    res.render('index')
})

router.get('/game', (req, res)=>{
    res.render('game')
})

//login and CRUD user_games

//login validation
router.post('/login', (req,res)=>{
    if ((req.body.username == 'admin' && req.body.password == 'admin')) {
        res.redirect('/dashboard')
    }
    res.render('login');
})

router.get('/dashboard', (req, res)=>{
    user_game.findAll()
    .then(user=>{
        res.render('dashboard', {user})
    })
})

router.post('/dashboard/create', (req,res)=>{
    user_game.create({
        username:req.body.username,
        password:req.body.password,
    })
    .then(user=>{
        res.redirect('/dashboard')
    }).catch(err=>{
        console.log("err", err);
    })
})

// delete user
router.delete('/dashboard/delete/:id', (req,res)=>{
    user_game.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(res=>{
        res.status(201).json(user)
    }).catch(err=>{
        res.status(404).json(`Can't create article`)
    })
})

router.put('/dashboard/update/:id', (req,res)=>{
    user_game.update({
        username:req.body.username,
        password:req.body.password,
    },{
        where:{id:req.params.id}
    })
    .then(user=>{
        res.status(201).json(user)
    }).catch(err=>{
        res.status(404).json(`Can't create article`)
    })
})

//klik folder yang bersangkutan pilih open in intergrated terminal, git mv./searchIcon.tsx ./SearchIcon.tsx
//pastikan yarn build sebelum commit

// router.get('/dashboard/create', (req,res)=>{
//     user_game.findAll()
//     .then(user=>{
//         res.render('dashboard', {user})
//     })
// })

// router.get('/dashboard/new', (req,res)=>{
//     user_game.findAll()
//     .then(user=>{
//         res.render('crud/insert', {user})
//     })
// })

// router.get('/dashboard/:id', (req , res)=>{
//     user_game.findOne({
//         where:{id:req.params.id}
//     })
//     .then(user=>{
//         res.render('show', {user})
//         // res.status(200).json(article)
//     })
// })

// // create user_game
// router.post('/dashboard/create', (req,res)=>{
//     user_game.create({
//         username:req.body.username,
//         password:req.body.password,
//     })
//     .then(user_game=>{
//         res.redirect('/dashboard/create')
//     }).catch(err=>{
//         console.log("err", err);
//     })
// })

// router.post('/dashboard/createbio', (req,res)=>{
//         user_game_biodata.create({
//         name:req.body.username,
//         address:req.body.password,
//         citizenship:req.body.citizenship,
//         married:req.body.married
//     })
//     .then(user_game=>{
//         res.redirect('/dashboard/create')
//     }).catch(err=>{
//         console.log("err", err);
//     })
// })

// // delete user
// router.delete('/dashboard/delete/:id', (req,res)=>{
//     console.log("req.params", req.params);
//     user_game.destroy({
//         where:{id: req.params.id},
//     })
//     .then(user=>{
//         if(user!=0){
//             res.redirect('/dashboard/create')
//         }else{
//             res.status(404).json(article)
//         }
//     })
// })

// //api router
// router.post('/api/register', (req, res)=>{
//     const {username, password, nama_lengkap} = req.body;
//     user.push({username, password, nama_lengkap})
//     fs.writeFile('./posts.json', user,()=>{
//         console.log('data changed')
//     })
//     res.redirect('/home');
// })

// router.put('/dashboard/update/:id', (req,res)=>{
//     user_game.update({
//         username:req.body.username,
//         password:req.body.password,
//     },{
//         where:{id:req.params.id}
//     })
//     .then(user=>{
//         res.status(201).json(user)
//     }).catch(err=>{
//         res.status.apply(422).json(`Can't create article`)
//     })
// })

// api router
// router.get('/api/posts/', (req, res)=>{
//     res.status(200).json(posts);
// })

// router.get('/api/posts/:id', (req, res)=>{
//     const post = posts.find(i => i.id === +req.params.id)
//     res.status(200).json(post);
// })

// router.post('/api/posts', (req, res)=>{
//     const {username, password, nama_lengkap} = req.body;
//     const id = posts[posts.length -1].id+1
//     const post={
//       id:id,
//       username:username,  
//       password:password,
//       name_lengkap: nama_lengkap,  
//     }
//     posts.push(post)
//     res.status(201).json(post);
//   })

// router.delete('/api/posts/:id', (req, res)=>{
//     posts = posts.filter(i => i.id !== +req.params.id)
//     res.status(200).json({
//         message:`Post dengan id ${req.params.id} sudah berhasil di hapus`
//     })
// })

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

// router.post('/login', (req, res)=>{
//     let userAccess=req.body;
//     let post=posts;
//     let userName = posts.find(x=>x.username===userAccess.username)
//     let userPass = posts.find(x=>x.password===userAccess.password)
//         if(!userName){
//             res.json("Username tidak ditemukan");
//         }
//         else if(userName && !userPass){
//             res.json("Silakan masukan pastword yang benar");
//         }
//         else{
//             res.json(`${userName.nama_lengkap} login dengan username: ${userName.username} dan password: ${userName.password}`);
//         }    
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


    
// })
    
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


router.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root:__dirname});
res.status(404).render('index');
})

module.exports = router;