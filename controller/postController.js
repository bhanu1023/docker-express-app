const Post = require("..//models/postModel")

exports.getAllPosts = async (req,res,next) =>{
    try {
        const posts = await Post.find();

        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {
                posts
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.createPost = async (req,res,next) =>{
    try {
        const posts = await Post.create(req.body);

        console.log(posts)

        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {
                posts
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail"
        })
    }
}