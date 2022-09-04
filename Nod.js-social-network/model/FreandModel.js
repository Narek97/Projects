var model = require("../model")

class FreandModel extends model{

	constructor(){
		super()
		this.table = "freands"
	}

	hardum(id1,id2){

		 return  new Promise((ok,error) =>{
            this.connection.query(`select * from ${this.table}   WHERE (user1_id=${id1} and user2_id=${id2}) OR (user1_id=${id2} and user2_id=${id1})`,function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
           })
          })
	}


// ....................................... das 5

	freandsmy(id1){

		return  new Promise((ok,error) =>{
            this.connection.query(`SELECT * FROM ${this.table} JOIN user on freands.user1_id=user.id WHERE user2_id = ${id1} UNION SELECT * FROM ${this.table} JOIN user on freands.user2_id=user.id WHERE user1_id = ${id1} `,function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
           })
          })

	}

}

module.exports = new FreandModel