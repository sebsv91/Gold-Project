import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl,
    });

    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el producto", error });
  }
};

export const getProduct = async (req, res) => {
  try {
    const productFound = await Product.findById(req.params.id);
    if (!productFound)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.json(productFound);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productFound = await Product.findByIdAndDelete(req.params.id);
    if (!productFound)
      return res.status(404).json({ message: "Producto no encontrado" });
    res
      .status(200)
      .json({
        message: "Producto eliminado correctamente",
        product: productFound,
      });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productFound = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!productFound)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.json(productFound);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el producto", error });
  }
};
