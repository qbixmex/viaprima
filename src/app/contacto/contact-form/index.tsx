"use client";

import type { FC, SubmitEvent } from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/cn";
import styles from "./styles.module.css";

export const ContactForm: FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000)
    event.currentTarget.reset();
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

        <form onSubmit={handleSubmit}>
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
                    name="name"
                    type="text"
                    className={styles.formInput}
                  />
                </div>

                {/* EMAIL */}
                <div className={styles.inputContainer}>
                  <label className={styles.formLabel} htmlFor="email">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.formInput}
                  />
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
                      type="phone"
                      className={cn(styles.formInput, styles.formPhoneInput)}
                    />
                  </div>
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
                    name="message"
                    className={styles.formMessage}
                  />
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <label className={styles.privacyPolicy}>
              <input
                type="checkbox"
                className={styles.checkbox}
              />
              <span className={styles.policyText}>
                Acepto la{" "}
                <span className={styles.policyHighlight}>
                  política de privacidad
                </span>{" "}
                y tratamiento de datos para atención y gestión logística de ViaPrima.
              </span>
            </label>

            {/* SUBMIT BUTTON */}
            <div className={styles.submit}>
              <button
                type="submit"
                className={styles.submitButton}
              >
                <span>Enviar mensaje</span>
                <Icon icon="mdi:send" className="text-[20px] transform -rotate-45" />
              </button>
            </div>
          </div>
        </form>

        {sent && (
          <div className={styles.confirmMessage}>
            <Icon icon="check_circle" className="text-blue-400 text-2xl" />
            <div className="text-body-sm font-body-sm">
              <p className={styles.confirmTitle}>Mensaje enviado exitosamente</p>
              <p className={styles.confirmDescription}>
                Un ejecutivo de operaciones se pondrá en contacto<br />
                al correo o teléfono proporcionado.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}