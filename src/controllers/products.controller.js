import {
  getProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
} from "../services/products.service.js";

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await getProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los productos",
      error: error.message,
    });
  }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await getProductByIdService(id);

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el producto",
      error: error.message,
    });
  }
};

// Crear un producto
export const createProduct = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
    success: false,
    message: "El body no puede estar vacío",
  });
}

    const { name, category, price, stock, units } = req.body;

    // VALIDACIÓN 400 (ANTES DEL SERVICE)
    if (!name || !category || !price || stock === undefined || !units) {
      return res.status(400).json({
        success: false,
        message: "Todos los campos son obligatorios",
      });
    }

    const newProduct = await createProductService(req.body);

    return res.status(201).json({
      success: true,
      message: "Producto creado correctamente",
      product: newProduct,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await getProductByIdService(id);
    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    await deleteProductService(id);

    res.status(200).json({
      message: "Producto eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el producto",
      error: error.message,
    });
  }
};
