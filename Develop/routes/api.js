const express = require("express");

const router = express.Router();

const db = require('../workout');

router.get("/api/workouts", function(req, res) {
    db.find().then(findData => {
        res.json(findData)
    }).catch(err => {
        res.json("found error"+ err)
    })
})

router.get('/api/workouts/range', function(req,res) {
    db.find().limit(7).then(rangeData => {
        res.json(rangeData)
    }).catch(err => {
        res.json("found error"+ err)
    })
})

router.post('api/workouts', function({body}, res){
    db.create(body).then(workoutData => {
        res.json(workoutData)
    }).catch(err => {
        res.json("found error"+ err)
    })
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    db.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body}},
        {new: true}
        
    ).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.json("found error"+ err)
    })
});

module.exports = router;