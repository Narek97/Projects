var model = require("../model")


class DislikeModel extends model{

	constructor(){
		super()
		this.table="dislike"
	}


	 dislikeriqanak(id1){

		return new Promise((ok,error)=>{

				 this.connection.query(`SELECT COUNT(user_dislike) as count FROM dislike WHERE status_id=${id1}`, function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
            })


		})

	}


}

module.exports=new DislikeModel