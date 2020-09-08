const express=require('express');
const router=express.Router();

const Records=require('./models/records');

// post : add data
router.post('/',(req,res) => {
    rec =new Records({
        task_name:req.body.task_name,
        task_description:req.body.task_description,
        creator:{
            name:req.body.creatorName,
            age:req.body.creatorAge,
        },
        duration:req.body.duration,
        created_at:req.body.created_at,
    });

    Records.save().then(Records => {
        res.send(Records);
    }).catch(error => {
        res.status(500).send("Records not added");
    });
});


module.exports = router;