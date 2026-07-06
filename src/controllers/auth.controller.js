import { loginService } from "../services/auth.service.js";

export const login = (req, res) => {
  try {
    const body = req.body || {};
    const { username, password } = body;

    //  VALIDACIÓN 400
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username y password son obligatorios",
      });
    }

    const token = loginService(username, password);  // username = admin, password = 1234

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Credenciales incorrectas",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login exitoso",
      token: `Bearer ${token}`,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};