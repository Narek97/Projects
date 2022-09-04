//................................. das 6

var model = require("../model")

class statusModel extends model{

	constructor(){
		super()
		this.table ="status"
	}

	//............................................. das7
	status(id){

		return new Promise((ok,err)=>{

     	this.connection.query(`select user.name, user.surname, user.img, status.id, status.status from ${this.table} JOIN user ON user.id = status.user_id WHERE status.user_id in (SELECT user1_id FROM freands WHERE user2_id=${id} UNION SELECT user2_id FROM freands WHERE user1_id=${id}) or status.user_id=${id}`,function(error,data){

        	if(error) throw error
	
        	return ok(data)
        })

                         
   	 })
	}

	// ????

	mystatus(id){

		 return  new Promise((ok,error) =>{
            this.connection.query(`SELECT * FROM STATUS JOIN user ON user.id=status.user_id WHERE user_id= ${id}`,function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
            })

          })

	}

}


module.exports = new statusModel