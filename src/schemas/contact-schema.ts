import z from "zod";

export const contactSchema = z.object({
  name: z
    .string("El nombre debe ser una cadena de texto")
    .min(3, 'El nombre debe tener al menos 2 caracteres'),
  email: z.email('Ingresa un correo electrónico válido'),
  phone: z
    .string("El teléfono debe ser una cadena de texto")
    .min(10, 'El teléfono debe incluir al menos 10 dígitos'),
  message: z
    .string("El mensaje debe ser una cadena de texto")
    .min(10, 'El mensaje debe tener al menos 10 caracteres'),
  privacyPolicy: z
    .boolean("La política de privacidad debe ser un valor falso o verdadero")
    .refine((value) => value === true, {
      message: 'Debes aceptar la política de privacidad para continuar',
    })
});
