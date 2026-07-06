import jwt from "jsonwebtoken";

export const loginService = (username, password) => {
  if (
    username !== process.env.ADMIN_USER ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return null;
  }

  return jwt.sign(
    {
      username,
      role: "admin",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
};