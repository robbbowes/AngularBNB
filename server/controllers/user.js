const User = require('../models/user');

exports.auth = function(req, res) {

}

exports.register = function(req, res) {
    const {username, email, password, passwordConfirmation}  = req.body;
    
    if (!email || !password) {
        return res.status(422).send({error: [{title: 'Data missing!', detail: 'Email and password are mandatory'}]})
    }
    if (password !== passwordConfirmation) {
        return res.status(422).send({error: [{title: 'Passwords do not match!', detail: 'Password and password confirmation do not match'}]})
    }

    User.findOne({email}, function(err, existingUser) {
        if (err) {
            return res.status(422).send({'mongoose': 'handle mongoose errors later'})
        }

        if (existingUser) {
            return res.status(422).send({error: [{title: 'Invalid email!', detail: 'Email belongs to another user'}]})
        }

        const user = new User({
            username,
            email,
            password
        });

        user.save(function(err) {
            if (err) {
                return res.status(422).send({'mongoose': 'handle mongoose errors later'})
            }

            res.json({'registered': true})
        })
    });
}