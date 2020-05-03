var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema(
	{
		village: String,
		city: {
			type: String,
			required: true
		},
		state: {
			type: String,
			required: true
		},
		pin: Number,
		user: Schema.Types.ObjectId
	},
	{ timestamps: true }
);
var userSchema = new Schema(
	{
		name: String,
		email: {
			lowercase: true,
            type: String,
            match: /@/
		},
		age: {
			type: Number,
			default: 0
		},
		password: {
			type: String,
			minlength: 5
		},
		createdAt: {
			type: Date,
			default: new Date()
		},
		favourites: {
			type: [ String ],
			required: true
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Address', addressSchema);
