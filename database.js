var mysql=require('mysql');
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:'',
database:'api'
});


var index={};
index.all=()=>{
return new Promise((resolve,reject)=>{
con.query(`select * from niraj`,(err,rows,fields)=>{
if(!err){
    return resolve(rows);
}
else{
     return reject(err.message);

}
});

});
}
index.create=()=>{
    return new Promise((resolve,reject)=>{
    con.query(`CREATE TABLE xyz(  
        cus_id INT NOT NULL AUTO_INCREMENT,  
        cus_firstname VARCHAR(100) NOT NULL,  
        cus_surname VARCHAR(100) NOT NULL,  
        PRIMARY KEY ( cus_id )  
     );`,(err,rows,fields)=>{
    if(!err){
        return resolve(rows);
    }
    else{
         return reject(err.message);
    
    }
    });
    
    });
    }
index.insert=()=>{
    return new Promise((resolve,reject)=>{
    con.query(`insert into niraj (name) values ('raja') `,(err,rows,fields)=>{
    if(!err){
        return resolve(rows);
    }
    else{
         return reject(err.message);
    
    }
    });
    
    });
    }
    index.update=()=>{
        return new Promise((resolve,reject)=>{
        con.query(`UPDATE niraj
        SET name = 'sonu'
        WHERE id='1'`,(err,rows,fields)=>{
        if(!err){
            return resolve(rows);
        }
        else{
             return reject(err.message);
        
        }
        });
        
        });
        }
        index.delete=()=>{
            return new Promise((resolve,reject)=>{
            con.query(`DELETE FROM niraj  
            WHERE id = 2;`,(err,rows,fields)=>{
            if(!err){
                return resolve(rows);
            }
            else{
                 return reject(err.message);
            
            }
            });
            
            });
            }
             
    




module.exports=index;