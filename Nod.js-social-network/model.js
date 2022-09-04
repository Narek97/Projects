var mysql = require('mysql');


class Database{
constructor(){
  this.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'userproject'
 });
  this.table = ''
}

  get(data){

           return  new Promise((ok,error) =>{
            this.connection.query(`select * from ${data}`,function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
           })
           })
  }
  get_where(data,where='and'){
          let harcum =`select * from ${this.table} where `
          let key = Object.keys(data)
          let value =Object.values(data)
          for (var i = 0; i <key.length;i++) {
            harcum += `${key[i]} = '${value[i]}'`

            if(i<key.length-1){
              harcum +=` ${where} `
            }
          }
          return new Promise((ok,error)=>{
           this.connection.query(harcum,function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok(result)
           })
          })

  }


  insert(data){
 let key = Object.keys(data).join(',')
 let value =Object.values(data).join("','")
   let harcum = `Insert INTO ${this.table}(${key}) values( '${value}')`
    return new Promise((ok,error)=>{
      this.connection.query(harcum,function (err,result) {
        if(err) throw err
          return ok(result.insertId)
      })
    })
  }


  update(data,where,p='and'){
  let harcum =`Update ${this.table} SET `
          let key = Object.keys(data)
          let value = Object.values(data)
          for (var i = 0; i <key.length;i++) {
            harcum += `${key[i]} = '${value[i]}'`

            if(i<key.length-1){
              harcum +=` , `
            }
          }
          harcum += ' where '

          let key1 = Object.keys(where)
          let value1 =Object.values(where)
          for (var i = 0; i <key1.length;i++) {
            harcum += `${key1[i]} = '${value1[i]}'`

            if(i<key1.length-1){
              harcum +=` ${where} `
            }
          }
          return new Promise((ok,error)=>{
           this.connection.query(harcum,function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok()
           })
          })

  }


  delete(data,p='and'){
let harcum =`delete from ${this.table} where `
          let key = Object.keys(data)
          let value =Object.values(data)
          for (var i = 0; i <key.length;i++) {
            harcum += `${key[i]} = '${value[i]}'`

            if(i<key.length-1){
              harcum +=` ${p} `
            }
          }
           return new Promise((ok,error)=>{
           this.connection.query(harcum,function(err,result){
                 
                 if(err){ throw err}
                  
                  return ok()
           })
          })


  }

  
}




module.exports = Database
