var model = require("../model")

class CommentModel extends model{

	constructor(){
		super()
		this.table="comment"
	}

	commenttesq(id1){

			 return  new Promise((ok,error) =>{
            this.connection.query(`SELECT * FROM comment JOIN user on comment.user_id=user.id WHERE status_id=${id1} `,function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
            })

          })
	}
	

	newcomment(id){

			return new Promise((ok,error)=>{

				this.connection.query(`SELECT * FROM comment JOIN user on comment.user_id=user.id WHERE comment.id=${id}`,function(err,result){
					if(err){ throw err}
                  
                  return ok(result)

				})

			})

	}


}

module.exports=new CommentModel