import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Obtener el header Authorization
const authHeader = req.headers.authorization;

  // Verificar si existe el token
  if (!authHeader) {
    return res.status(401).json({
      message: "Acceso denegado. Token no proporcionado.",
    });
  }

  // Verificar que comience con Bearer
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Formato de token inválido.",
    });
  }

  // Extraer el token
  const token = authHeader.split(" ")[1];

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Guardar la información del usuario
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({
      message: "Token inválido o expirado.",
    });
  }
};

export default authMiddleware;