
const request = require('request')

// request('http://localhost:3000/view-users', (err, response, body) => {
// 	if(!err){
// 		console.log(body)
// 	}
// })

request('http://localhost:3000/add-user/', {
		method: "POST",
		form: {
			adminAccess: true, 
			username: "Lala", 
			displayName: "lele", 
			password: "1010", 
			location: "UPM"
		}
	}, (err, response, body) => {
		if(!err){
			console.log("Added User!")
			// console.log(body)
		}else{
			console.log("Error in adding new user...")
		}
})

//  request('http://localhost:3000/update-user/', {
// 		method: "PUT",
// 		form: {
// 			id: 3,
// 			username: "LOLO_MO"
// 		}
// 	}, (err, response, body) => {
// 		if(!err){
// 			console.log("Updated User!")
// 			// console.log(body)
// 		}else{
// 			console.log("Error in updating user...")
// 		}
// })



// request('http://localhost:3000/delete-user/', {
// 		method: "DELETE",
// 		form: {
// 			id: 2
// 		}
// 	}, (err, response, body) => {
// 		if(!err){
// 			console.log("Deleted User!")
// 			// console.log(body)
// 		}else{
// 			console.log("Error in deleting user...")
// 		}
// })



