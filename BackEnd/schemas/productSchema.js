import z from "zod";

const Product = z.object({
  productName: z.string({
    required_error: "El nombre del producto es requerido",
    invalid_type_error: "El nombre debe ser una cadena de texto",
  }),
  productDescription: z.string({
    required_error: "La descripción del producto es requerida",
    invalid_type_error: "La descripción debe ser una cadena de texto",
  }),
  price: z
    .number({
      required_error: "El precio es requerido",
      invalid_type_error: "El precio debe ser un número positivo",
    })
    .positive({
      message: "El precio debe ser un número positivo",
    }),
  image: z.any({
    required_error: "La imagen es obligatoria",
  }),
});

export default Product;

//! Missing mongoose schema for PRODUCTS
