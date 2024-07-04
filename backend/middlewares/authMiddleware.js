import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  let token;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else {
    return res
      .status(401)
      .json({ error: "Authorization token missing or malformed" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("Decoded:", decoded);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
