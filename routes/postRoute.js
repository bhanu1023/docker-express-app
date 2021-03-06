const express = require("express")

const postController = require("../controller/postController")

const router = express.Router()


router.route("/").get(postController.getAllPosts)

router.route("/createpost").post(postController.createPost)

module.exports = router