let multer = require('multer')
let usermodel = require("../model/UserModel")
//..................................... nor das 3
let freandmodel = require("../model/FreandModel")
let requestmodel = require("../model/RequestModel")
//..................................................
let statusmodel = require("../model/StatusModel")
let likemodel = require("../model/LikeModel")
let dislikemodel = require("../model/DislikeModel")

class UserController{



            // skzbnakan profili nkar dnelu hamar
            image(req,res){

                   var Storage = multer.diskStorage({  
                           destination: function(req, file, callback) {  
                           callback(null, "public/img/avatar");  
                       },  
                           filename: function(req, file, callback) {  
                           callback(null, Date.now() + "_" + file.originalname);  
                       }  
                   });
              
                   var upload = multer({ storage: Storage }).single("avatar");  
                   
                   upload(req, res, function(err) {  
                      if (err) {  
                          return res.end("Something went wrong!");  
                      } 

                      //...............................nor das 
                      // nkary update anelu hamar 
                     else{

                          usermodel.update({img:'/img/avatar/'+req.file.filename},{id:req.session.user.id})
                          req.session.user.img='/img/avatar/'+req.file.filename
                          res.redirect("/profile")
                     } 
                   }); 

            }

             // tvyalnery ubdate anelu hamar 
             updateajax(req,res){

                       var name = req.body.name
                       var surname = req.body.surname
                       var age = req.body.age
                    

                       usermodel.update({name:name,surname:surname,age:age},{id:req.session.user.id})
                       req.session.user.name=name
                       req.session.user.surname=surname
                       req.session.user.age=age
                                            
             }

             //............................ nor das 1 poisk

             async search(req,res){

               // res.send(req.body.x)
               let arr = await usermodel.search(req.body.x)
              

               //......................................... nor das 2
               var id = req.session.user.id//verdnum enq tvyal sayty mtnoxi id in
               for (var i =0 ; i < arr.length ; i++) {

                 var frend = await freandmodel.hardum(id,arr[i].id)
 

                 if (frend.length==0) {

                   arr[i].status = "ynker chi"


                 }

                 else{

                   arr[i].status = "ynker e"

                 }

                 var request = await requestmodel.hardum(id,arr[i].id)
                   

                   if (request.length!=0) {

                     arr[i].status = "esem uxarke"

                   }

                 var request = await requestmodel.hardum(arr[i].id,id)

                   if (request.length!=0) {

                     arr[i].status = "inden uxarke"

                   }

                   if (id==arr[i].id) {

                     arr[i].status = "es em"

                   }
      
               }

                res.send(JSON.stringify(arr)) //zangvaty sarquma teqst
             
             }


             //....................................................... nor das 3

                async  add(req,res){

                    let id = req.body.id
                    let my_id = req.session.user.id
                    await requestmodel.insert({user1_id:my_id,user2_id:id})
                    // res.send()
                    // console.log(id,my_id)

                 }


                 async cansel(req,res){

                   let id = req.body.id
                   let my_id = req.session.user.id
                   await requestmodel.delete({user1_id:my_id,user2_id:id})

                 }

                 async delete(req,res){

                   let id = req.body.id
                   let my_id = req.session.user.id
                   await freandmodel.delete({user1_id:my_id,user2_id:id})
                   await freandmodel.delete({user1_id:id,user2_id:my_id})

                 }


                 async yes(req,res){

                   let id = req.body.id
                   let my_id = req.session.user.id
                   await freandmodel.insert({user1_id:my_id,user2_id:id})
                   await requestmodel.delete({user1_id:my_id,user2_id:id})
                   await requestmodel.delete({user1_id:id,user2_id:my_id})

                   
                 }

                  async no(req,res){

                   let id = req.body.id
                   let my_id = req.session.user.id
                   await requestmodel.delete({user1_id:my_id,user2_id:id})
                   
                 }

                

               //............... nor das 4
               async  hayteriqanak(req,res){

                  let my_id = req.session.user.id
                  let arr = await requestmodel.hayteriqanak(my_id)
                  
               
                  res.send(JSON.stringify(arr))
               
                 }  

                 // ..................................... das 5

                async haytericuchadrum(req,res){

                    let my_id = req.session.user.id
                    let arr = await requestmodel.haytericuchadrum(my_id)

                    res.send(JSON.stringify(arr))


  
                }


                async freandschuchadrum(req,res){

                    let my_id = req.session.user.id
                    let arr = await freandmodel.freandsmy(my_id)
                    res.send(JSON.stringify(arr))

                }   



                async freands(req,res){
                              
                     let my_id = req.session.user.id
                     let arr = await  freandmodel.freandsmy(my_id)  //ynkernerin freands ejum chuych talu hamar
                       
                     var data = {
                        layout:"layouts/profillayout",
                         user:req.session.user,
                         arr:arr


                     }
                     res.render("freands",data)
                  

                }

                // ........................................... das 6
                status(req,res){
                    
                    let my_id = req.session.user.id
                    let text = req.body.textarea
                    if (text!="") {
                    statusmodel.insert({status:text,user_id:my_id})

                    }
                    res.redirect('/profile')
                  
                    // let status = statusmodel.insert(my_id)
                }

                //............................................. das7


               async frendstatus(req,res){

                    let my_id = req.session.user.id
                    let arr=   await statusmodel.status(my_id)

                      // likeri qanaky hashvelu hamar
                        for(let i=0;i<arr.length;i++) {


                                let a = await likemodel.likeriqanak(arr[i].id)
                                let b = await dislikemodel.dislikeriqanak(arr[i].id)
                                arr[i].likecount = a[0].count
                                arr[i].dislikecount = b[0].count
                               
                        }
  
                       // ...........................

                    res.send(JSON.stringify(arr))

               }


                  
              async mystatus(req,res){

                 let my_id = req.session.user.id
                 let status = await statusmodel.mystatus(my_id)

                 let data = {
                   layout:"layouts/profillayout",
                   user:req.session.user,
                   status:status

                 }

                 res.render("mystatus",data)
               }


               //................................................

               myprofile(req,res){ 

                 let data = {
                   layout:"layouts/profillayout",
                   user:req.session.user,
                 }

                 res.render("myprofile",data)
               }

              //ynkerneri ej gnalu hamar
              async myfreands(req,res){
                 // res.send(req.params.id)//ynkeroj idin verdnum enq sench frends.ejs um nshel enq
                 let status = await statusmodel.mystatus(req.params.id)
                 let user = await usermodel.user(req.params.id)
                  console.log(req.session.user)
                 

                  let data={
                     layout:"layouts/freandlayout",
                     user:req.session.user,
                     status:status,
                     userr:user
                     
                  }

                 res.render("myfreands",data)

               }


              //ynkerneri eji ynkernerin chuych talu hamar

               async frendfreands(req,res){

                  // let k = req.session.user
                  let frendfreands = await freandmodel.freandsmy(req.params.id)
                  let user = await usermodel.user(req.params.id)

                 
                   var data = {
                     layout:"layouts/freandlayout",                                                   
                      user:req.session.user,
                      frendfreands:frendfreands,
                      userr:user
                     }
                     res.render("frendfreands",data)
                 
               }

               async photo(req,res){


                 let data = {
                     layout:"layouts/freandlayout",  
                      user:req.session.user,
                                                                      

                 }

                 res.render("photo",data)
               }

 }

module.exports = new UserController
