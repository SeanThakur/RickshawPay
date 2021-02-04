import jwt from'jsonwebtoken';

export default {
    authToken: (req,res,next) => {
        let token = req.get("authorization");
        if(token) {
            token = token.slice(7);
            jwt.verify(token, "Vik@Sala", (err, decoded) => {
                if(err) {
                    res.json({
                        success: 0,
                        message: "Invalid token"
                    });
                } else {
                    next();
                }
            })
        }else {
            res.json({
                success: 0,
                message: "Access denied! unauthorized user"
            })
        }
    }
}