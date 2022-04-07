const express = require('express');
const user = require('../models/user');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/signup', (req, res, next) => {
    res.render('signup')
});

router.post('/signup', async(req, res, next) => {
    try {
        const {name, password} = req.body;
        const newUser = new user({name, password});
        res.render(req.body)
        await newUser.save();
    } catch (error) {
        console.log(error);
    }
  
});

module.exports = router;