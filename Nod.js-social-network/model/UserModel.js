var model = require("../model")

class UserModel extends model{
	constructor(){
		super()
		this.table="user"
	}


	//........................................................ nor das 1
  search(where){

    return new Promise((ok,err)=>{

      this.connection.query(`select * from ${this.table}  where name Like '${where}%' or surname Like "${where}%" `,function(error,data){

        if(error) throw error

        return ok(data)
      })

                         
    })

  }

    user(id){
     return  new Promise((ok,error) =>{
            this.connection.query(`SELECT * FROM user WHERE id= ${id}`,function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
            })

          })

  }




}

module.exports = new UserModel