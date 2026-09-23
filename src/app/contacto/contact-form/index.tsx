"use client";

import type { FC } from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/cn";
import { useForm } from "react-hook-form";
import { contactSchema } from "@/schemas/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmailAction } from "@/app/contacto/actions/send-email.action";
import type z from "zod";
import styles from "./styles.module.css";
import Link from "next/link";

type ContactFormData = z.infer<typeof contactSchema>;

const DEFAULT_VALUES = {
  name: '',
  email: '',
  phone: '',
  message: '',
  privacyPolicy: false,
};

export const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: DEFAULT_VALUES,
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('message', data.message);
    formData.append('privacyPolicy', data.privacyPolicy.toString());

    try {
      const response = await sendEmailAction(formData);

      if (response.error) {
        setError({ message: response.error });
        return;
      }

      if (response.ok) {
        setIsSent(true);
        reset(DEFAULT_VALUES);
      }
    } catch (error) {
      console.error('No se pudo enviar el formulario', error);
    } finally {
      setTimeout(() => {
        setIsSent(false);
        setError(null);
      }, 5000);
      
    }
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Contacto</h1>
          <p className={styles.headerDescription}>
            Completa tus datos y nos pondremos en contacto a la brevedad posible.
          </p>
        </div>

        <div className={styles.divider} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.mainLayout}>
            <div className={styles.formLayout}>
              <div className={styles.columnOne}>
                {/* NAME */}
                <div className={styles.inputContainer}>
                  <label className={styles.formLabel} htmlFor="name">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoFocus={false}
                    autoComplete="off"
                    className={cn(styles.formInput, {
                      [styles.formInputError]: errors.name,
                    })}
                    {...register('name')}
                  />
                  {errors.name && (
                    <div className={styles.formInputErrorMessage}>
                      {errors.name.message}
                    </div>
                  )}
                </div>

                {/* EMAIL */}
                <div className={styles.inputContainer}>
                  <label className={styles.formLabel} htmlFor="email">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoFocus={false}
                    autoComplete="off"
                    className={cn(styles.formInput, {
                      [styles.formInputError]: errors.email,
                    })}
                    {...register('email')}
                  />
                  {errors.email && (
                    <div className={styles.formInputErrorMessage}>
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className={styles.inputContainer}>
                  <label className={styles.formLabel} htmlFor="phone">
                    Teléfono ó Celular
                  </label>
                  <div className={styles.phoneContainer}>
                    <div className={styles.phoneArea}>
                      <span>🇲🇽</span>
                      <span>+52</span>
                    </div>
                    <input
                      id="phone"
                      autoFocus={false}
                      autoComplete="off"
                      className={cn(styles.formInput, {
                        [styles.formInputError]: errors.phone,
                      })}
                      {...register('phone')}
                    />
                  </div>
                  {errors.phone && (
                    <div className={styles.formInputErrorMessage}>
                      {errors.phone.message}
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.columnTwo}>
                {/* MESSAGE */}
                <div className={cn(styles.inputContainer, "h-full")}>
                  <label className={styles.formLabel} htmlFor="message">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    autoFocus={false}
                    className={cn(styles.formMessage, {
                      [styles.formInputError]: errors.message,
                    })}
                    {...register('message')}
                  />
                  {errors.message && (
                    <div className={styles.formInputErrorMessage}>
                      {errors.message.message}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <section>
              <div className={styles.privacyPolicy}>
                <label>
                  <span className={cn(styles.checkboxWrapper, {
                    [styles.checkboxError]: errors.privacyPolicy,
                  })}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      autoFocus={false}
                      {...register('privacyPolicy')}
                    />
                  </span>
                </label>

                <Link
                  href="/politicas-privacidad"
                  className={styles.policyText}
                  target="_blank"
                >
                  Acepto la{" "}
                  <span className={styles.policyHighlight}>
                    política de privacidad
                  </span>{" "}
                  y tratamiento de datos para atención y gestión logística de ViaPrima.
                </Link>
              </div>

              {errors.privacyPolicy && (
                <div className={cn(styles.formInputErrorMessage, "ml-10!")}>
                  {errors.privacyPolicy.message}
                </div>
              )}
            </section>

            {/* SUBMIT BUTTON */}
            <div className={styles.submit}>
              <button
                type="submit"
                className={cn(styles.submitButton, {
                  [styles.submitButtonDisabled]: isSubmitting,
                  "animate-pulse": isSubmitting,
                })}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span>Enviando mensaje</span>
                    <Icon icon="fa6-solid:spinner" className="text-[20px] animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Enviar mensaje</span>
                    <Icon icon="mdi:send" className="text-[20px] transform -rotate-45" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {isSent && (
          <div className={cn(styles.notification, styles.alertSuccess)}>
            <Icon icon="material-symbols:check-circle" className={styles.successIcon} />
            <div className="text-body-sm font-body-sm">
              <p className={styles.confirmTitle}>Mensaje enviado exitosamente</p>
              <p className={styles.confirmDescription}>
                Un ejecutivo de operaciones se pondrá en contacto<br />
                al correo o teléfono proporcionado.
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className={cn(styles.notification, styles.alertError)}>
            <Icon icon="material-symbols:x-circle" className={styles.errorIcon} />
            <div className="text-body-sm font-body-sm">
              <p className={styles.errorTitle}>Ocurrió un error</p>
              <p className={styles.errorDescription}>
                {error.message}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}