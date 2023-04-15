const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
            full_name: {type: String },
            email: { type: String },
            price: { type: String}
}, { strict: false });
// const userSchema=mongoose.model('users',user);

// var mongoose = require('mongoose');
// var user = mongoose.Schema({
//     path: { type: string,  },
//     title: { type: string,  }
// })
// module.export = mongoose.model('game', schema);

module.exports = mongoose.models.users || mongoose.model('users', userSchema);