import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import notFoundMiddleware from "./middlewares/notFound.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada."
  });
});

export default app;