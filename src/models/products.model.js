import { db } from "../config/firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

// Obtener todos los productos
export const getAllProducts = async () => {
  const querySnapshot = await getDocs(productsCollection);

  return querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
};

// Obtener un producto por ID
export const getProductById = async (id) => {
  const productRef = doc(db, "products", id);
  const docSnapshot = await getDoc(productRef);

  if (!docSnapshot.exists()) {
    return null;
  }

  return {
    id: docSnapshot.id,
    ...docSnapshot.data(),
  };
};

// Crear un producto
export const createProduct = async (product) => {
  const docRef = await addDoc(productsCollection, product);

  return {
    id: docRef.id,
    ...product,
  };
};

// Eliminar un producto
export const deleteProduct = async (id) => {
  const productRef = doc(db, "products", id);

  await deleteDoc(productRef);

  return true;
};