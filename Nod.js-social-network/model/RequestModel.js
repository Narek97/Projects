var model = require("../model")

class RequestModel extends model{

	constructor(){
		super()
		this.table = "request"
	}

	hardum(id1,id2){

			 return  new Promise((ok,error) =>{
            this.connection.query(`select * from ${this.table}   WHERE user1_id=${id1} and user2_id=${id2}`,function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
            })

          })

	}
    //............... nor das 4

	 hayteriqanak(id1){

		return new Promise((ok,error)=>{

				 this.connection.query(`select COUNT(*) FROM request WHERE user2_id=${id1}`, function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
            })


		})

	}

//................................. das 5
	haytericuchadrum(id1){

			return new Promise((ok,error)=>{

				 this.connection.query(`select * FROM request  JOIN user ON request.user1_id=user.id  WHERE user2_id=${id1}`, function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
            })


		})


	}

}

module.exports = new RequestModel