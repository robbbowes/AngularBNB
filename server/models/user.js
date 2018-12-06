const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        min: [4, 'Min. 4 characters'],
        max: [32, 'Max. 32 characters']
    },
    email: {
        type: String,
        min: [4, 'Min. 4 characters'],
        max: [32, 'Max. 32 characters'],
        unique: true,
        lowercase: true,
        required: 'Email address required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        min: [4, 'Min. 4 characters'],
        max: [32, 'Max. 32 characters'],
        required: 'Password required'
    },
    rentals: [{type: Schema.Types.ObjectId, ref: 'Rental'}]
});

module.exports = mongoose.model('User', userSchema);