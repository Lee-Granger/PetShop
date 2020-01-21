const mongoose = require('mongoose');
const pet = mongoose.model('pets');


module.exports = {
    
    addPet: (req, res) => {
        console.log(req.body);
        pet.create(req.body, (err, data) => {
            if(err) {
                res.json(err); 
            } else {
                res.json(data);
            }
        })
    },

    getAllPets: (req, res) => {
        pet.find({}, (err, data) => {
            if(err){
                res.json(err);
            } else {
                res.json(data);
            }
        })
    },

    getEdit: (req, res) => {
        pet.findOne({_id: req.params.id}, (err, data) => {
            if(err) {
                res.json(err);
            } else {
                res.json(data);
            }
        })
    },

    update: (req, res, obj) => {
        pet.findOneAndUpdate({_id: req.body._id}, {$set: req.body}, (err, data) => {
            if(err) {
                res.json(err);
            } else {
                res.json(data)
            }
        });
    },

    deleteThis: (req, res) => {
            pet.findOneAndRemove({_id: req.params.id}, (err, data) => {
                if(err){
                    res.json(err);
                } else {
                    res.json(data);
                }
            })

        }
}