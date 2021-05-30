const express = require('express');
const router = express.Router();
const Algorithms =  require('../../dbConfig/models/algorithm.js');

router.get('/',(req,res) => {
    Algorithms.find({}, (err, algos) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(algos);
        }
    })
});

module.exports = router;