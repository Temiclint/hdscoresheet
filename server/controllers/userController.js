
import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js"





export const createUser = asyncHandler(async(req, res) =>{
    let {email} = req.body;
    const userExists = await prisma.user.findUnique({where : {email : email}});
        if (!userExists){
            const user = await prisma.user.create({data : req.body})
            res.status(200).send({message: "user created successfully" , user})
        }else{
            res.status(201).send({message: "user already registered with this email"})
        }    
})


// get All Users
export const getAllUser = asyncHandler(async(req, res)=>{
    const users = await prisma.user.findMany()
    if (users.length > 0){
        res.status(200).send(users);
    }else{
        res.status(200).send({message: "No data"})
    }

});

//  search user

export const getUserById = asyncHandler(async(req, res)=>{
    const {id} = req.params 
    
    
    try {
        const user = await prisma.user.findUnique({where :{id}});
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({message: error.message})
    }

})


// update task
export const updateTask = asyncHandler(async(req, res)=>{
try{


    const {uniqueCode} = req.params

    const codeExists = await prisma.user.findUnique({where : {uniqueCode : uniqueCode},});

    if(!codeExists) { 
        return res.status(401).send({message: "incorrect code"})

}

const updateDailyTask = await prisma.user.update({
    where: {
        uniqueCode : uniqueCode,
    },
    data: req.body,
});

    res.status(200).send(({message: "Task Updated"})


)

}catch (error){
    console.log(error);
    res.status(500).send({message: "server error"})
}
});



export const deleteUser =  asyncHandler(async(req, res)=>{
  const {id} = req.params

  const userExists = await prisma.user.findFirst({where:{id}})

    if(!userExists){
        return res.status(404).send({message: "No such user exists"})
    }
    
    const userDelete = await prisma.user.delete({where: {id}})

    if(!userDelete){
        return res.status(400).send({message: "unable to delete"})
        } res.status(200).send({message:"Deleted successfully"})


   

})