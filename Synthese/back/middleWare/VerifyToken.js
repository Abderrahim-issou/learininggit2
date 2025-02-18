import jwt from "jsonwebtoken";


const VerifyToken = (req, res, next) =>{
    
    const hearer = req?.headers?.Authorization || req?.headers?.authorization;

    const token = hearer?.split(' ')[1];

    if (!token) return res.status(400).send('token not found');

    jwt.verify(

        token,

        process.env.ACCESS_TOKEN,

        async (err, decode) =>{

            if (err) return res.status(400).json({ message: 'Authentication failed', error: err.message });

            req.user = decode.user ;

            req.email= decode.email;

            next();
            
        }
    )

}
export default VerifyToken;
