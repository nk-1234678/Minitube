const asyncHandler = (requestHandler)=>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}


export {asyncHandler}

// step1: const asyncHandler = ()=>{}
// step:2 const asyncHandler = (function)=>()=>{}
// step:3 const asyncHandler = (function)=> async()=>{}

// const asyncHandler = (fn) => async (req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }