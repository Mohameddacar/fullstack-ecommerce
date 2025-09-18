const secureApi=(req,res,next)=>{
    
    if(req.headers.authorization==process.env.API_SECURE_MIDDLEWARE){
        next()

    }else{
        res.send({"error":"Authorization Failed"})

    }
    
    
}
module.exports=secureApi