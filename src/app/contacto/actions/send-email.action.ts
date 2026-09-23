'use server';

import nodeMailer from 'nodemailer';
import type { NodemailerError } from 'nodemailer';
import { contactSchema } from "@/schemas/contact-schema";

export const sendEmailAction = async (formData: FormData) => {
  const rawData = {
    name: formData.get('name') ?? '',
    email: formData.get('email') ?? '',
    message: formData.get('message') ?? '',
    phone: formData.get('phone') ?? '',
    privacyPolicy: formData.get('privacyPolicy') === 'true',
  };

  
  const formVerified = contactSchema.safeParse(rawData);
  
  if (!formVerified.success) {
    const { error } = formVerified;
    return {
      error: error.issues[0].message,
    };
  }

  if (!formVerified.data.privacyPolicy) {
    return {
      error: 'Los términos de políticas de privacidad no fueron aceptados',
    };
  }

  const MAILER_HOST = process.env.MAILER_HOST ?? '';
  const MAILER_PORT = Number(process.env.MAILER_PORT ?? '0');
  const MAILER_EMAIL = process.env.MAILER_EMAIL ?? '';
  const MAILER_TO = process.env.MAILER_TO ?? '';
  const MAILERS_TO = process.env.MAILERS_TO ?? '';
  const MAILER_SECRET_KEY = process.env.MAILER_SECRET_KEY ?? '';

  const transporter = nodeMailer.createTransport({
    host: MAILER_HOST,
    port: MAILER_PORT,
    secure: MAILER_PORT === 465,
    auth: {
      user: MAILER_EMAIL,
      pass: MAILER_SECRET_KEY,
    },
    // logger: true,
    // debug: true,
  });

  const { name, email, message } = formVerified.data;

  const htmlMessage =
    '<h1>Detalles del mensaje</h1>\n' +
    '<h2>Remitente</h2>\n' +
    '<ul>\n' +
    `<li><b>Nombre:</b> ${name}</li>\n` +
    `<li><b>Email:</b> ${email}</li>\n` +
    '</ul>\n' +
    '<h2>Mensaje:</h2>\n' +
    `<p>${message}</p>\n`;

  try {
    await transporter.sendMail({
      from: `ViaPrima <${MAILER_EMAIL}>`,
      to: MAILER_TO,
      cc: MAILERS_TO ?? undefined,
      replyTo: `${name} <${email}>`,
      subject: `Mensaje de ${name} del sitio ViaPrima`,
      html: htmlMessage,
    });

    return {
      ok: true,
      message: 'Mensaje enviado correctamente ✉️',
    };
  } catch (error) {
    if (error && typeof error === 'object') {
      const mailError = error as NodemailerError;

      console.log('CODE:', mailError.code);
      console.log('RESPONSE CODE:', mailError.responseCode);
      console.log('RESPONSE:', mailError.response);
    }

    if (error instanceof Error) {
      console.log('NAME:', error.name);
      console.log('MESSAGE:', error.message);
    }

    return {
      ok: false,
      error: 'No se pudo enviar el mensaje 🚩',
    };
  }
};
