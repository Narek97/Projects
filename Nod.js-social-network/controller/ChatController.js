let chatmodel = require("../model/ChatModel")


class ChatController {

constructor(io){

	io.on('connection', function (socket) {

		socket.on("msg",async function(data){
		
     let arr  = await   chatmodel.addMessage(data.id,data.myid)
   
    socket.join(data.myid)  //socket.join(data.y) en mardu tvyaly umich namaky gnuma kap uni to(data.id) het

    socket.emit("oldmsg",arr)

			
		})

  	socket.on("sendmsg",async function(data){


  		let arr = await  chatmodel.insert({u1_id:data.myid,u2_id:data.id,message:data.message})
      let mess  = await   chatmodel.newmessage(arr)
 		  
  		
  		socket.broadcast.to(data.id).emit("newmsg",mess[0])   //to(data.id) en mardu tvyaly ov stanuma kap uni socket.join(data.myid) het

  		socket.emit("newmsg",mess[0])

  	})


	})

}



}

module.exports = ChatController