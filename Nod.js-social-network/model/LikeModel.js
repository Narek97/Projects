var model = require("../model")

class LikeModel extends model{

	constructor(){
		super()
		this.table="likedislike"
	}


	 likeriqanak(id1){

		return new Promise((ok,error)=>{

				 this.connection.query(`SELECT COUNT(user_like) as count FROM likedislike WHERE status_id=${id1}`, function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
            })


		})

	}


}

module.exports=new LikeModel