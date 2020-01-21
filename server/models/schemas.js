const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Please enter a name'], minlength: [3, 'Please enter a valid name']},
    type: { type: String, required: [true,'Please enter a type'], minlength: [3, 'Please enter a valid type']},
    description: { type: String, required: [true, 'Enter a description Loser'], minlength: [3, 'Please enter a valid description']  },
    skill1: { type: String, required: false},
    skill2: { type: String, required: false},
    skill3: { type: String, required: false},
})

mongoose.model('pets', PetSchema);