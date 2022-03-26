const express = require("express")

const Post = require("../models/post.model")
const authenticate = require("../middlewares/authenticate")
const router = express.Router()

router.post("",authenticate,async (req,res)=>{

    req.body.userid = req.userID

    try{
      const post = await Post.create(req.body)
      return res.status(201).send(post)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})
router.patch("/:id",authenticate,async (req,res)=>{
  try{
    const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).send(post)
  }catch(err){
      return res.status(400).send({message:err.message})
  }
})

module.exports = router
