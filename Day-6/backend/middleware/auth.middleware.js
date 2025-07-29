import jwt from "jsonwebtoken";

export function authorizeToken(req, res, next) {
  // Extract token from headers
  const authHeader = req.headers.authorization;

  // check if token is available
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ messgae: "TOken is not provided" });
  }

  //split the token
  const token = authHeader.split(" ")[1];

  try {
    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // if verified then check roles
    // const userType = decoded.userType
    const {userType} = decoded;
    if (userType.toLowerCase() === 'employee'){
        return res.status(400).json({ message : 'Access Denied!'})

    }
    next();
  } catch (error) {
     // if not verrifed then send error
     console.log("error while verifying token", error)
     res.status(400).json({messgae: "Invalid token"})

  }
}
