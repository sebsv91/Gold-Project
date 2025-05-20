import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string({
    required_error: "El nombre del producto es requerido",
    invalid_type_error: "El nombre debe ser una cadena de texto",
  }),
  description: z.string({
    required_error: "La descripción del producto es requerida",
    invalid_type_error: "La descripción debe ser una cadena de texto",
  }),
  price: z
    .number({
      required_error: "El precio es requerido",
      invalid_type_error: "El precio debe ser un número",
    })
    .positive({
      message: "El precio debe ser un número positivo",
    }),
  imageUrl: z
    .string({
      required_error: "La imagen es obligatoria",
      invalid_type_error: "La URL de la imagen debe ser una cadena de texto",
    })
    .url({ message: "Debe ser una URL válida" }),
});

export const updateProductSchema = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre debe ser una cadena de texto",
    })
    .optional(),
  description: z
    .string({
      invalid_type_error: "La descripción debe ser una cadena de texto",
    })
    .optional(),
  price: z
    .number({
      invalid_type_error: "El precio debe ser un número",
    })
    .positive({
      message: "El precio debe ser un número positivo",
    })
    .optional(),
  imageUrl: z
    .string({
      invalid_type_error: "La URL de la imagen debe ser una cadena de texto",
    })
    .url({ message: "Debe ser una URL válida" })
    .optional(),
});
