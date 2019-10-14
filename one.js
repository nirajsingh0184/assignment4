var db=require('./database');
var express=require('express');
const router = express.Router();
router.get('/select',async(req,res,next)=>{
try{
    let results=await db.all();
    res.send(results);
  // console.log(result);
   
}catch(e){
    console.log(e.message);
    //res.sendStatus(500);
}
});
router.get('/create',async(req,res,next)=>{
  try{
      let results=await db.create();
      res.send(results);
    // console.log(result);
     
  }catch(e){
      console.log(e.message);
      //res.sendStatus(500);
  }
  });
router.get('/insert',async(req,res,next)=>{
    try{
        let results=await db.insert();
        res.send(results);
      // console.log(result);
       
    }catch(e){
        console.log(e.message);
        //res.sendStatus(500);
    }
    });
    router.get('/update',async(req,res,next)=>{
        try{
            let results=await db.update();
            res.send(results);
          // console.log(result);
           
        }catch(e){
            console.log(e.message);
            //res.sendStatus(500);
        }
        });
        router.get('/delete',async(req,res,next)=>{
          try{
              let results=await db.delete();
              res.send(results);
            // console.log(result);
             
          }catch(e){
              console.log(e.message);
              //res.sendStatus(500);
          }
          });
       

module.exports=router;