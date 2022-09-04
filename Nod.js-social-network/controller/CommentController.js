let commentmodel = require("../model/CommentModel")
let likemodel = require("../model/LikeModel")
let dislikemodel = require("../model/DislikeModel")


class CommentController{

	async commenttesq(req,res){
		var id =req.body.x
		let arr = await commentmodel.commenttesq(id)
		res.send(JSON.stringify(arr))
	}

	async comment(req,res){

		let my_id=req.session.user.id
		let com = req.body.x//ajaxic ekat tvyaly
       	let id = req.body.id 
		let mess = await commentmodel.insert({user_id:my_id,comment:com,status_id:id})
		let arr = await commentmodel.newcomment(mess)
		res.send(JSON.stringify(arr))

	}


	async like(req,res){

		let my_id=req.session.user.id
		let id = req.body.id
		let l = req.body.x

       var x = await likemodel.get_where({user_id:my_id,status_id:id}) //stuguma bazayum et mardy arden lik dreal te che
      
       if (x==0) {

		await likemodel.insert({user_id:my_id,user_like:l,status_id:id})
         await dislikemodel.delete({user_id:my_id,user_dislike:l,status_id:id})
		
		
       }
       else {
         await likemodel.delete({user_id:my_id,user_like:l,status_id:id})
       	
       }
		
	}

	async dislike(req,res){


		let my_id=req.session.user.id
		let id = req.body.id
		let l = req.body.x

       var x = await dislikemodel.get_where({user_id:my_id,status_id:id}) //stuguma bazayum et mardy arden dislik dreal te che
      
       if (x==0) {

		await dislikemodel.insert({user_id:my_id,user_dislike:l,status_id:id})
         await likemodel.delete({user_id:my_id,user_like:l,status_id:id})

       }
       else {
         await dislikemodel.delete({user_id:my_id,user_dislike:l,status_id:id})
       	
       }



	}

}

module.exports=new CommentController
