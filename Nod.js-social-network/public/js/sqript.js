// nkary update anelu hamar
$(".settingimage").on("input",function(){

	$(".img").submit()

})

//............................................... nor das
//tvyalnery update anelu hamar
$(".save").click(function(){
   let name = $(".name").val()
   let surname = $(".surname").val()
   let age = $(".age").val()
   // console.log(name,surname,age)
   $('h5').html(name+" "+surname+" "+age)	//vor inputi mej tvyalnery grat lini profile.ejs i h5 y
   
   //router.js um piti grenq post tvyaly hachen u verdnenq tvyaly 
   $.ajax({
    	url:"/updateajax",//hasce
    	type:"post",//uxarkman devy
    	data:{name,surname,age},//tvyal uxarkelu hamar,ete key u popoxakani anuny nuynna karang miat grenq ,verevi popoxakanneri het kap uni
    	success:function(r){    // het stachvox tvyaly,r-i texy inch uzenq karanq grenq r-hench het ekat tvyaly
        
      }
   })

   $('#myModal').modal('hide');//update kochaky save aneluch heto inqniran pakelu hamar

})

// vor sexmenq nastroika iconin divy haytnvi kori

 $(".setting").click(function(){

   $(".settingdiv").toggle()
   $(".messenger").hide() //vor nasroyki vra sexmenq mesingeri bachaty kori
   $(".myfreands").hide() //nuyny es

   
 })


// ............................................. nor das 1 poisk 

$(".search").on("input",function(){

      $(".resultdiv").empty()//empty datarkuma divery
       var x = $(this).val()
       $(".settingdiv").hide() //vor messengeri vra sexmenq mesingeri bachaty kori
       $(".myfreands").hide() //nuyny es
       $(".messenger").hide() //nuyny es

       // console.log(x)
       // ete poiski texy datark chi nor ajaxy ashxati
       if (x!="") {

         $.ajax({

           url:"/search",
           type:"post",
           data:{x},
           success:function(r){

              r = JSON.parse(r) ////texsty heta sarqum zangvat
              
              //......................................... nor das 2
              r.forEach(function(i){

                var div =$(`<div class="div" ><img src="${i.img}" style = 'width:50px'><h6>${i.name} ${i.surname}</h6></div>`)

                if (i.status=="ynker e") {

                    div.append(`<button class = "delete" data-id="${i.id}"> Delete </button>`)

                }


                if (i.status=="ynker chi") {

                    div.append(`<button class = "send" data-id="${i.id}"> Send</button>`)

                }


                if (i.status=="inden uxarke") {

                    div.append(`<button class = "yes" data-id="${i.id}"> Yes </button> <button class = "No" data-id="${i.id}"> No </button>`)

                }

                if (i.status=="esem uxarke") {

                    div.append(`<button class = "cansel" data-id="${i.id}">cansel</button>`)

                }

               $(".resultdiv").append(div)

              })


           }

         })
       }
})



//............................... nor das 3
$(document).on("click",".cansel",function(){

    var id = $(this).attr("data-id")
    $(this).removeClass("cansel").addClass("send").html("send")
    $.ajax({

      url:"/cansel",
      type:"post",
      data:{id},
       success:function(r){
      }

    })

})

$(document).on("click",".send",function(){

    var id = $(this).attr("data-id")
    $(this).removeClass('send').addClass('cansel').html("cansel")
    $.ajax({

      url:"/add",
      type:"post",
      data:{id},
      success:function(r){
      }


    })


})


$(document).on("click",".delete",function(){

    var id = $(this).attr("data-id")
    $(this).removeClass("delete").addClass("send").html("send")
    $.ajax({

      url:"/delete",
      type:"post",
      data:{id},
       success:function(r){
      }

    })

})

$(document).on("click",".yes",function(){

    var id = $(this).attr("data-id")
    $(this).removeClass("yes").addClass("delete").html("delete")
    $(this).parent().find(".No").remove()
    $.ajax({

      url:"/yes",
      type:"post",
      data:{id},
       success:function(r){
      }

    })



})

$(document).on("click",".No",function(){

    var id = $(this).attr("data-id")
    $(this).removeClass("No").addClass("send").html("send")
    $(this).parent().find(".yes").remove()
    $.ajax({

      url:"/yes",
      type:"post",
      data:{id},
       success:function(r){
      }

    })

    

})

 //............... nor das 4

 function request(){
    $.ajax({
    
      url:"/hayteriqanak",
      type:"post",
      success:function(r){
    $('.hayter').remove()
         r = JSON.parse(r)
    
    
         var div = $(`<sup class='hayter' style = "color:red"> ${r[0]["COUNT(*)"]}</sup>`)
         $(".hayt").append(div)
    
      }
    })

 }

 request()

// setInterval(request, 1000)
    
//..................................................................... das 5
 $(document).on("click",".hayt",function(){


      $(".myfreands").toggle()
      $(".messenger").hide()   //vor hiti vra sexmenq mesingeri bachaty kori
      $(".settingdiv").hide()  //nuyny es
      $(".myfreands").empty()
     $.ajax({
    
      url:"/myfreands",
      type:"post",
      success:function(r){

          r = JSON.parse(r)

          r.forEach(function(i){

            var div =$(`<div class="div"><img src="${i.img}" style = 'width:30px;height = 30px'><h6>${i.name} ${i.surname}</h6></div>`)

            div.append(`<button class = "yes" data-id="${i.id}"> Yes </button> <button class = "No" data-id="${i.id}"> No </button>`)


            $(".myfreands").append(div)


          }) 


      }
    })

 })

  //............................................. das7



  
 // function request(){
 //   $(".f").remove()

  $.ajax({
      url:"/frendstatus",
      type:"post",

      success:function(r){
           
          r = JSON.parse(r)
               r.forEach(function(i){

                  
                    var div = $(`<div style = "border: 1px solid #c0c8d4;background: #e9ebee" class="f"> 
                    <spum class = "img"><img src="${i.img}" alt="" style = 'width:50px'> ${i.name} ${i.surname} updated status <br><br> ${i.status}</spum> <br> 
                    <spum style="color:green;cursor:pointer;margin-left: 30px" ><i class="far fa-thumbs-up like" data-id="${i.id}" >Like ${i.likecount}</i></spum>                           
                    <spum style="color:red;cursor:pointer;margin-left: 30px"><i class="far fa-thumbs-down dislike" data-id="${i.id}" >Dislike ${i.dislikecount}</i></spum> 
                    <spum style="cursor:pointer;margin-left: 30px" class='comment' data-id="${i.id}"><i class="far fa-comment-dots "> Comment</i></spum>  
                    <div class="comm"></div><textarea name="" class="commtext" data-id="${i.id}"></textarea><br></div>`)

               
                  if(i.status!=""){
                  
                   $(".frendstatus").prepend( div,"</br>")
                  }
                  
               })
          

      }
  })

  //  }

  //  request()
  
  // setInterval(request, 1000)




//..................................................
//like  dnelu hamar


  $(document).on("click",".like",function(){

     
     var x = 1
     var id = $(this).attr("data-id")
   
        $.ajax({

             url:"/comlike",
             type:"post",
             data:{x,id},
             success:function(r){
             }
       })

    

  })

//dislike dnelu hamar

 $(document).on("click",".dislike",function(){

    var x = 1
     var id = $(this).attr("data-id")
        $.ajax({

             url:"/comdislike",
             type:"post",
             data:{x,id},
             success:function(r){

              
             
             }
       })

     
  })


// ...........comment

$(document).on("click",".comment",function(){


    $(this).next().toggle()
    var x = $(this).attr("data-id")
    var _this=this
    
 function request(){

    $.ajax({
      url:"/mycommenttesq",
      type:"post",
      data:{x},
       success:function(r){
           r = JSON.parse(r)
                 
                console.log($(_this).parents('.f'))
                $(_this).parents('.f').find(".c").remove()
                r.forEach(function(i){
                var div = $(`<spum class="c" ><img src="${i.img}" alt="" style = 'width:30px'> <spum style="color:#3a8aa6">${i.name}</spum>  ${i.comment} </br></br>`)
                $(_this).parents('.f').find(".comm").prepend(div)         
             
        })


           }

    })

 }

 request()

setInterval(request, 1)
 
})



$(document).on("change",".commtext",function(){


  var x = $(this).val()
   $(this).val("")
  var id = $(this).attr("data-id")
  


       $.ajax({
           url:"/mycomment",
           type:"post",
           data:{x,id},
           success:function(r){

             r = JSON.parse(r)
              r.forEach(function(i){
                 var div = $(`<spum class="c"><img src="${i.img}" alt="" style = 'width:30px'> <spum style="color:#3a8aa6">${i.name}</spum>  ${i.comment} </br></br> `)
                           
               $(".comm").prepnd(div)

              })


            
           }


       })
        
})


$(".addphoto").click(function(){

  alert()
})


  $('.divsmile a').click(function(){

           var smiley = $(this).attr('title');
           var text = $('.mess').val()
           $('.mess').focus().val(text +" "+smiley+" ");
           
 });



















