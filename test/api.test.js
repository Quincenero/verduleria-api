import request from "supertest";
import app from "../src/app.js";

let token = "";

describe("API Verdulería", () => {

  // 🔐 LOGIN
  test("Login correcto devuelve token", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({
        username: "admin",
        password: "1234"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();

    token = res.body.token;
  });

  // 🍎 GET PRODUCTS
  test("Obtener productos", async () => {
    const res = await request(app).get("/api/products");

    expect(res.statusCode).toBe(200);
  });

  // 🚫 404
  test("Ruta inexistente devuelve 404", async () => {
    const res = await request(app).get("/ruta-que-no-existe");

    expect(res.statusCode).toBe(404);
  });

  // 🔐 CREAR PRODUCTO PROTEGIDO
  test("Crear producto con token", async () => {
    const res = await request(app)
      .post("/api/products/create")
      .set("Authorization", token)
      .send({
        name: "Banana",
        category: "frutas",
        price: 1000,
        stock: 10,
        units: "kg"
      });

    expect(res.statusCode).toBe(201);
  });

  // 🚫 SIN TOKEN
  test("Crear producto sin token falla", async () => {
    const res = await request(app)
      .post("/api/products/create")
      .send({
        name: "Banana"
      });

    expect(res.statusCode).toBe(401);
  });

});