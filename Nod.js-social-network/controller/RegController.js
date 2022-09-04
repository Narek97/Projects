let usermodel = require("../model/UserModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

let freandmodel = require("../model/FreandModel")


class RegController{

	index(req,res){
		let data = {
			error:req.session.error,
			form:req.session.form,
			layout:"layouts/indexlayout"

		}
		req.session.destroy()
		res.render("signup",data)
	}

	async signup(req,res){
//..vor mek angam inputnery lrachnenq u orinak passwordi errori depqum lrachratnery chkori
		let form = {
			name:req.body.name,
			surname:req.body.surname,
			email:req.body.email,
			age:req.body.age,
		
		}
		req.session.form=form
//........................		
		req.checkBody("name","lrachreq anuny").notEmpty()
		req.checkBody("name","greq menak tarer").isAlpha()
		req.checkBody("surname","lrachreq azganuny").notEmpty()
		req.checkBody("surname","greq menak tarer").isAlpha()
		req.checkBody("email","lrachreq emaily").notEmpty()
		req.checkBody("email","in the end should be @mail.com").isEmail()
		req.checkBody("password","lrachreq gaxtnabary").notEmpty()
		req.checkBody("passwordconfirm","Enter a passwordconfirm").notEmpty()
		req.checkBody("passwordconfirm","Those passwords didnt match. Try again").equals(req.body.password)
     
		var err = req.validationErrors()
		if(err){
           
			req.session.error= err
			res.redirect("/")

		}

		else{
             var x = await usermodel.get_where({email:req.body.email}) //stuguma bazayum email dashtum mer grat emaily ka te che
            if(x.length==0){
			
				bcrypt.hash(req.body.password, saltRounds,async function(err, hash) {
				    await usermodel.insert({name:req.body.name,surname:req.body.surname,email:req.body.email,age:req.body.age,password:hash,img:"/img/avatar/avatar.png"})
   			    });
				req.session.error=[{msg:"duq hajoxutyamb grancvel eq"}]
				res.redirect("/login")


			}
			else{

				req.session.error=[{msg:"ays email zbaxvat e"}]
                res.redirect("/")

			}
		}
	}

	//..............................................

	login(req,res){
		let data = {
			error:req.session.error,
			form:req.session.form,
			layout:"layouts/indexlayout"
		}
		res.render("login",data)
		req.session.destroy()
	}

	async profile(req,res){

		if(req.session.user){
            let my_id = req.session.user.id
            let arr = await  freandmodel.freandsmy(my_id)  
			
			var data ={
				user:req.session.user,
			    layout:"layouts/profillayout",
			    arr:arr
			}
			res.render("profile",data)
		}

		else{
            res.redirect("/login")
		}
	}

	async check(req,res){

		let form = {
			email:req.body.email
		}
		req.session.form=form

		req.checkBody("email","lrachreq email dashty").notEmpty()
		req.checkBody("email","lrachreq chisht email").isEmail()
		req.checkBody("password","lrachreq password dashty").notEmpty()
		var err = req.validationErrors()

		if(err){
           
			req.session.error= err
			res.redirect("/login")
		}

		else{

			var user = await usermodel.get_where({email:req.body.email})

			if (user.length!=0 ) {

				bcrypt.compare(req.body.password, user[0].password, function(err, ress) {
    
   					 if(ress){
                       
                       req.session.user=user[0] //tvyal mardu masin bolor tvyalnery bazayich verdnum pahum enq sesiayum
   					   res.redirect("/profile")
					
   					 }
   					else{
						
   						req.session.error=[{msg:"duq grel eq sxal password"}]
                		res.redirect("/login")

   					}
				});
				
			}

			else{
				req.session.error=[{msg:"nman email ov mard granchvat che"}]
                res.redirect("/login")
			}	
		}	
	}
}


module.exports = new RegController