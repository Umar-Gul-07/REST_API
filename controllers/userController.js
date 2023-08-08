import userModel from "../models/user.js";

class userController{
     static createDoc = async (req , res)=>
     {
        try{
            const {name , age , fees} = req.body
            const doc = new userModel ({
               name : name ,
               age : age,
               fees : fees
            })
            const result = await doc.save()
            res.send (result)
        }catch(error){
         console.log(error)
        }
     }



     static getAllDoc = async(req, res )=>
     {
         try{
            const result = await userModel.find ()
            res.send(result)
         }catch(error)
         {
            console.log(error)
         }
     }



     static getSingleDocByID = async (req, res )=>
     {
      try{
         const result = await userModel.findById(req.params.id)
         res.send(result)
      }catch(error)
      {
         console.log(error)
      }
     }



     static updateDOcByID = (req, res )=>
     {
        res.send("update DOc By ID")
     }


     
     static deleteDocByID = (req, res )=>
     {
        res.send("elete Doc By ID")
     }
}

export default userController