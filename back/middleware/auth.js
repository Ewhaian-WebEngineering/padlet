export const requireAuth=(req,res,next)=>{
    //세션에 유저에 유저아이디가 담긴다고 가정
    const userId=req.session?.user?.userId;
    if(!userId)
        return res.status(401).json({success:false});
    req.userId=userId;
    next();
}