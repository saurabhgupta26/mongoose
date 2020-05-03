// // Answer here for tasks.md
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// // Q1 Answer here...
// var userSchema = new Schema({
// 	name: String,
// 	email: String,
// 	age: Number
// });

// // Q2 Answer here...
// var userSchema = new Schema({
// 	name: String,
// 	email: {
// 		lowercase: true,
// 		type: String
// 	},
// 	age: {
// 		type: Number,
// 		default: 0
// 	}
// });
// // Q3 Answer here...
// var userSchema = new Schema({
// 	name: String,
// 	email: {
// 		lowercase: true,
// 		type: String
// 	},
// 	age: {
// 		type: Number,
// 		default: 0
// 	},
// 	password: {
// 		type: String,
// 		minlength: 5
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: new Date()
// 	}
// });

// // Q4 Answer here...
// var addressSchema = new Schema({
// 	village: String,
// 	city: String,
// 	state: String,
// 	pin: Number,
// 	user: Schema.Types.ObjectId
// });

// // Q5 Answer here...
// var addressSchema = new Schema({
// 	village: String,
// 	city: {
// 		type: String,
// 		required: true
// 	},
// 	state: {
// 		type: String,
// 		required: true
// 	},
// 	pin: Number,
// 	user: Schema.Types.ObjectId
// });

// // Q6 Answer here...
// var userSchema = new Schema({
// 	name: String,
// 	email: {
// 		lowercase: true,
// 		type: String
// 	},
// 	age: {
// 		type: Number,
// 		default: 0
// 	},
// 	password: {
// 		type: String,
// 		minlength: 5
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: new Date()
// 	},
// 	favourites: {
// 		type: [ String ],
// 		required: true
// 	}
// });

// // Q7 Answer here...

// var addressSchema = new Schema(
// 	{
// 		village: String,
// 		city: {
// 			type: String,
// 			required: true
// 		},
// 		state: {
// 			type: String,
// 			required: true
// 		},
// 		pin: Number,
// 		user: Schema.Types.ObjectId
// 	},
// 	{ timestamps: true }
// );
// var userSchema = new Schema(
// 	{
// 		name: String,
// 		email: {
// 			lowercase: true,
// 			type: String
// 		},
// 		age: {
// 			type: Number,
// 			default: 0
// 		},
// 		password: {
// 			type: String,
// 			minlength: 5
// 		},
// 		createdAt: {
// 			type: Date,
// 			default: new Date()
// 		},
// 		favourites: {
// 			type: [ String ],
// 			required: true
// 		}
// 	},
// 	{ timestamps: true }
// );

// // Q8 Answer here...
// module.exports = mongoose.model('User', userSchema);
// module.exports = mongoose.model('Address', addressSchema);

// Q9 Answer here..
// let express = require('express');
// let mongoose = require('mongoose');
// let User = require('./models/users');
// let app = express();

// var PORT = process.env.PORT || 3000;

// // connecting to mongodb database

// mongoose.connect(
// 	'mongodb://localhost/mongoose',
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useCreateIndex: true
// 	},
// 	(err) => {
// 		console.log('Connected', err ? err : true);
// 	}
// );

// //instantiate express app
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.post('/', (req, res, next) => {
// 	User.create(rreq.body, (req, data) => {
// 		if (err) return next(err);
// 		console.log('Data sent');
// 		res.json({ data });
// 	});
// });

// //error handler middlewares
// // 404
// app.use((req, res, next) => {
// 	res.status(404).send('<h1> Page not found </h1>');
// });

// // client or server error
// app.use((err, req, res, next) => {
// 	if (err.name === 'ValidationError') {
// 		res.statusCode = 400;
// 		return res.json({ error: err.message });
// 	}
// 	if (err.name === 'MongoError') {
// 		return res.status(400).json({ error: err.message });
// 	}
// 	res.status(500).json({ err });
// 	// console.log(err);
// 	res.json({ error: err.message });
// });

// // listener
// app.listen(PORT, () => {
// 	console.log('Server started on', PORT);
// });

// Q10

// let express = require('express');
// let mongoose = require('mongoose');
// let User = require('./models/users');
// let app = express();

// var PORT = process.env.PORT || 3000;

// // connecting to mongodb database

// mongoose.connect(
// 	'mongodb://localhost/mongoose',
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useCreateIndex: true
// 	},
// 	(err) => {
// 		console.log('Connected', err ? err : true);
// 	}
// );

// //instantiate express app
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// find

// app.get('/:id', (req, res, next) => {
// 	var objId = req.params.id;
// 	User.find({ _id: objId }, (err, data) => {
// 		if (err) return next(err);
// 		res.json({ data });
// 	});
// });

// findOne

// app.get('/:id', (req, res, next) => {
// 	var objId = req.params.id;
// 	User.findOne({ _id: objId }, (err, data) => {
// 		if (err) return next(err);
// 		res.json({ data });
// 	});
// });

// findById

// app.get('/:id', (req, res, next) => {
// 	var objId = req.params.id;
// 	User.findById({ objId }, (err, data) => {
// 		if (err) return next(err);
// 		res.json({ data });
// 	});
// });
// //error handler middlewares
// // 404
// app.use((req, res, next) => {
// 	res.status(404).send('<h1> Page not found </h1>');
// });
// // client or server error
// app.use((err, req, res, next) => {
// 	if (err.name === 'ValidationError') {
// 		res.statusCode = 400;
// 		return res.json({ error: err.message });
// 	}
// 	if (err.name === 'MongoError') {
// 		return res.status(400).json({ error: err.message });
// 	}
// 	res.status(500).json({ err });
// 	// console.log(err);
// 	res.json({ error: err.message });
// });

// // listener
// app.listen(PORT, () => {
// 	console.log('Server started on', PORT);
// });

// Q11

// let express = require('express');
// let mongoose = require('mongoose');
// let User = require('./models/users');
// let app = express();
// var PORT = process.env.PORT || 3000;

// // connecting to mongodb database

// mongoose.connect(
// 	'mongodb://localhost/mongoose',
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useCreateIndex: true
// 	},
// 	(err) => {
// 		console.log('Connected', err ? err : true);
// 	}
// );

// //instantiate express app
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Model.update

// app.get('/:id', (req, res, next) => {
// 	var objId = req.params.id;
// 	User.update({ _id: objId }, (err, data) => {
// 		if (err) return next(err);
// 		res.status(200).json({ data });
// 	});
// });

// // Model.updateOne

// app.get('/:id', (req, res, next) => {
// 	var objId = req.params.id;
// 	User.updateOne({ _id: objId }, (err, data) => {
// 		if (err) return next(err);
// 		res.status(200).json({ data });
// 	});
// });

// // model.findByIdAndUpdate(id)

// app.get('/:id', (req, res, next) => {
// 	var objId = req.params.id;
// 	User.findByIdAndUpdate({ objId }, (err, data) => {
// 		if (err) return next(err);
// 		res.status(200).json({ data });
// 	});
// });
// //error handler middlewares
// // 404
// app.use((req, res, next) => {
// 	res.status(404).send('<h1> Page not found </h1>');
// });
// // client or server error
// app.use((err, req, res, next) => {
// 	if (err.name === 'ValidationError') {
// 		res.statusCode = 400;
// 		return res.json({ error: err.message });
// 	}
// 	if (err.name === 'MongoError') {
// 		return res.status(400).json({ error: err.message });
// 	}
// 	res.status(500).json({ err });
// 	// console.log(err);
// 	res.json({ error: err.message });
// });

// // listener
// app.listen(PORT, () => {
// 	console.log('Server started on', PORT);
// });

// Q12

let express = require('express');
let mongoose = require('mongoose');
let User = require('./models/users');
let app = express();
var PORT = process.env.PORT || 3000;

// connecting to mongodb database

mongoose.connect(
	'mongodb://localhost/mongoose',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	},
	(err) => {
		console.log('Connected', err ? err : true);
	}
);

//instantiate express app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Model.findByIdAndDelete()

app.get('/:id', (req, res, next) => {
	var objId = req.params.id;
	User.findByIdAndDelete({ _id: objId }, (err, data) => {
        if (err) return next(err);
        console.log("User Deleted");
	});
});

//error handler middlewares
    // 404
app.use((req, res, next) => {
	res.status(404).send('<h1> Page not found </h1>');
});
    // client or server error
app.use((err, req, res, next) => {
	if (err.name === 'ValidationError') {
		res.statusCode = 400;
		return res.json({ error: err.message });
	}
	if (err.name === 'MongoError') {
		return res.status(400).json({ error: err.message });
	}
	res.status(500).json({ err });
	// console.log(err);
	res.json({ error: err.message });
});

// listener
app.listen(PORT, () => {
	console.log('Server started on', PORT);
});