import z from "zod";

const User = z.object({
  username: z
    .string({
      invalid_type_error: "Nombre debe ser una serie de caracteres",
      required_error: "Nombre es requerido",
    })
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" })
    .max(25, { message: "El nombre no puede exceder los 25 caracteres" }),
  phone: z
    .string({
      invalid_type_error: "El teléfono debe ser una cadena de texto",
      required_error: "Teléfono es requerido",
    })
    .regex(/^[0-9]{10}$/, {
      message: "El teléfono debe tener exactamente 10 dígitos",
    }),
  email: z
    .string({
      required_error: "Email es requerido",
    })
    .email({
      message: "Debe ser un email válido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .max(64, { message: "La contraseña no debe exceder 64 caracteres" })
    .regex(/[A-Z]/, {
      message: "La contraseña debe contener al menos una letra mayúscula",
    })
    .regex(/[0-9]/, {
      message: "La contraseña debe contener al menos un número",
    })
    .regex(/[\W_]/, {
      message: "La contraseña debe contener al menos un carácter especial",
    }),
});
