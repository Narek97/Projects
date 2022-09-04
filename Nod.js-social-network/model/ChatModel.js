var model = require("../model")

class ChatModel extends model{

	constructor(){

		super()
		this.table="message"

	}


	addMessage(id1,id2){
		  return new Promise((ok,error)=>{

        this.connection.query(`select message.*,user.name from message 
                          JOIN user on message.u1_id=user.id
                          WHERE (u1_id=${id1} AND u2_id = ${id2}) or (u1_id=${id2} AND u2_id = ${id1})`,function(err,result){

          if(err) throw err
            ok(result)

        })
      })
	}

	newmessage(id1){

      return new Promise((ok,error)=>{
        this.connection.query(`select message.*,user.name from message 
                          JOIN user on message.u1_id=user.id
                          WHERE message.id=${id1}`,function(err,result){

          if(err) {throw err}
            ok(result)

        })
      })
	}


}

module.exports = new ChatModel
