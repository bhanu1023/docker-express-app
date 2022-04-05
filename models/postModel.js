const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    title:{
        type: String,
        require: [true,"POST must have title"]
    },
    body:{
        type: String,
        require: [true,"POSt mus have body"]
    }
})

const Post =  mongoose.model("Post",postSchema)

module.exports = Post