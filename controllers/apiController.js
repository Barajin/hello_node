const User = require('../models/User'),
      bCrypt = require('bcrypt-nodejs');

function newUser(req, res, next) {
	// body..
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;

	if (name == undefined || email == undefined || password == undefined) {
		res.status(500).json({ success: false, message: 'Faltan parametros.'});
    } else {
    	var newUser = new User();
		newUser.name = name;
		newUser.email = email;
		newUser.password = createHash(password);

		newUser.save((err) => {
			if (err) {
				res.status(500).json({ success: false, message: 'No se pudo guardar el usuario.'});
			} else {
				res.status(200).json({ success: true, message: 'usuario guardado exitosamente.'});
			}
		});
    }
}

function getUsers(argument) {
	// body...
}

var createHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

var isValidPassword = function(user, password) {
    return bCrypt.compareSync(password, user.password);
}

module.exports = {
	newUser,
	getUsers
}