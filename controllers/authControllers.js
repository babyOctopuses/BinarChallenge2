const {user_game} = require('../models');

module.exports={
    gethome:(req, res)=>{
        res.render('login')
    },
    login_home:(req, res)=>{
        res.render('login')
    },
    get_home:(req, res)=>{
        res.render('index')
    },
    get_game:(req, res)=>{
        res.render('game')
    },
    get_dashboard:(req, res)=>{
        user_game.findAll()
        .then(user=>{
            res.render('dashboard', {user})
        })
    },
    post_login:(req,res)=>{
        if ((req.body.username == 'admin' && req.body.password == 'admin')) {
            res.redirect('/dashboard')
        }
        res.render('login');
    },
    post_dashboard:(req,res)=>{
        user_game.create({
            username:req.body.username,
            password:req.body.password,
        })
        .then(user=>{
            res.redirect('/dashboard')
        }).catch(err=>{
            console.log("err", err);
        })
    },
    delete_dashboard:(req,res)=>{
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
    },
    update_dashboard:(req,res)=>{
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
    }    
}
