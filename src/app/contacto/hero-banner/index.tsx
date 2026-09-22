import type { FC } from 'react';
import Image from "next/image";
import { Icon } from "@iconify/react";
import { infoCards } from "./data";
import { cn } from '@/lib/cn';
import styles from "./styles.module.css";

export const HeroBanner: FC = () => {
  return (
    <section className={styles.heroBanner}>
      <div className={cn(styles.spotlights, styles.spotlightOne)} />
      <div className={cn(styles.spotlights, styles.spotlightTwo)} />

      <div className={styles.container}>
        <div className={cn(styles.columns, styles.columnA)}>
          <div className={styles.badge}>Contacto</div>

          <h1 className={styles.heading}>Soporte</h1>

          <p className={styles.supportDescription}>
            Escríbenos ó ponte en contacto con nosotros y uno de nuestro ejecutivos de soporte te atenderá con mucho gusto en la lo más pronto posible.
          </p>

          <div className={styles.infoCards}>
            {infoCards.map((card) => (
              <div key={card.id} className={styles.infoCard}>
                <div className={cn(styles.infoCardIconContainer, card.color)}>
                  <Icon icon={card.icon} className={styles.infoCardIcon} />
                </div>

                <div>
                  <h3 className={styles.infoCardTitle}>
                    {card.title}
                  </h3>
                  <p
                    className={styles.infoCardDescription}
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={cn(styles.columns, styles.columnB)}>
          <div className={styles.cardBorder} />

          <div className={styles.card}>
            <figure className={styles.cardFigure}>
              <Image
                src="/images/atencion-al-cliente.png"
                alt="Sala de control y atención al cliente ViaPrima"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.cardImage}
              />
            </figure>

            <div className={styles.cardContent}>
              <div className={styles.contentHeading}>
                <div className={styles.iconContainer}>
                  <Icon icon="mdi:question-answer" className={styles.headingIcon} />
                </div>

                <h3 className={styles.contentHeadingTitle}>
                  Atención personalizada
                </h3>
              </div>

              <p className={styles.contentDescription}>
                Cada mensaje es atendido por un ejecutivo de operaciones que
                conoce el flujo logístico a detalle y te atenderá todas tus inquietudes en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
