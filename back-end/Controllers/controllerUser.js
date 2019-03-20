
// NOTE: queries will be changer depending on future database procedures

exports.register = function(req, res){
	const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    }
    console.log(userData)
}

exports.viewUsers = function(req, res){
	var conn = res.locals.connection
	conn.query('select * from user;', (err, result) => {
		if(!err){
			console.log(result)
			res.send(result)
		}else{
            return res.send(400, 'Couldnt get a connection');
        }
	})
}

exports.addUser = function(req, res){
	var conn = res.locals.connection
	conn.query('insert into user(adminAccess, username, displayName, password, location) values('+req.body.adminAccess+', "'+req.body.username+'", "'+req.body.displayName+'", "'+req.body.password+'", "'+req.body.location+'");', (err, result) => {
		if(!err){
			console.log(result)
			res.send(result)
		}else{
            return res.send(400, 'Couldnt get a connection');
        }
	})
}

exports.updateUser = function(req, res){
	var conn = res.locals.connection
	var userId = req.body.id
	var username = req.body.username
	// console.log(userId)
	conn.query('update user set username = "'+username+'" where userId = '+userId+';', (err, result) => {
		if(!err){
			console.log(result)
			res.send(result)
		}else{
            return res.send(400, 'Couldnt get a connection');
        }
	})
}

exports.deleteUser = function(req, res){
	var conn = res.locals.connection
	var userId = req.body.id
	// console.log(userId)
	conn.query('delete from user where userId = '+userId+';', (err, result) => {
		if(!err){
			console.log(result)
			res.send(result)
		}else{
            return res.send(400, 'Couldnt get a connection');
        }
	})
}