const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
	console.log(req.headers, " req.headers");
	try {
		console.log(req.headers.authorization, " --- req.headers.authorization")
		const token = req.headers.authorization.split(' ')[1]

		console.log(token, " --- token");
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		console.log(decoded, " --- decoded");
		

		req.user = decoded;
		next()

	} catch(err){
		console.log(err);
		res.status(401).json({error: "Invalid token."});
	}
}


module.exports = verifyToken;