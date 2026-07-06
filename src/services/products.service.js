import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../models/products.model.js";

export const getProductsService = async () => {
  return await getAllProducts();
};

export const getProductByIdService = async (id) => {
  return await getProductById(id);
};
export const createProductService = async (product) => {
  return await createProduct(product);
};

export const updateProductService = async (id, updatedProduct) => {
  const productRef = doc(db, "products", id);
  await updateDoc(productRef, updatedProduct);
  return { id, ...updatedProduct };
};

export const deleteProductService = async (id) => {
  return await deleteProduct(id);
};