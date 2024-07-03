import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    console.log("no token");
    return res
      .status(401)
      .json({ error: "Authorization token missing or malformed" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("success", decoded);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
