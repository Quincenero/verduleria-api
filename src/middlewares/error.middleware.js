const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Error interno del servidor."
  });
};

export default errorMiddleware;