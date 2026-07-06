# 🥕 Verdulería API REST

API REST para la administración de productos de una tienda de frutas y verduras.  
Permite realizar operaciones CRUD sobre productos almacenados en Firebase Firestore y cuenta con autenticación mediante JWT.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Firebase (Firestore)
- JWT (jsonwebtoken)
- dotenv
- cors

---

## 📦 Instalación

```bash
npm install

▶️ Ejecución

npm run dev
o
npm start

⚙️ Variables de entorno (.env)

Crear un archivo .env basado en .env.example:
PORT=3000

ADMIN_USER=admin
ADMIN_PASSWORD=1234
JWT_SECRET=tu_secreto

FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...

🔐 Autenticación
{
  "username": "admin",
  "password": "1234"
}
Respuesta:
{
  "success": true,
  "token": "Bearer eyJhbGciOiJIUzI1NiIs..."
}

🍎 Productos

Productos
📌 Obtener todos

GET /api/products

📌 Obtener por ID

GET /api/products/:id

📌 Crear producto (PROTEGIDO)

POST /api/products/create

📌 Eliminar producto (PROTEGIDO)

DELETE /api/products/:id


🛡️ Middleware de autenticación

Las rutas protegidas requieren:

Authorization: Bearer TOKEN


⚠️ Manejo de errores
. 400 → datos inválidos
. 401 → sin autenticación
. 403 → token inválido
. 404 → ruta no encontrada
. 500 → error interno del servidor

📊 Ejemplo de producto
{
  "name": "Manzana Roja",
  "category": "frutas",
  "price": 1800,
  "stock": 50,
  "units": "kg"
}

👨‍💻 Autor

Marco Espinoza
