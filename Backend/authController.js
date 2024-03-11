const jwt = require("jsonwebtoken");
const secretKey = "arunramasamy46"; // Replace with your secret key

function authenticateToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Missing token" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    req.userId = decoded.userId;
    next();
  });
}

module.exports = authenticateToken;
