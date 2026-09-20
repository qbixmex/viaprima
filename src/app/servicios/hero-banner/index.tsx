import type { FC } from 'react';
import styles from './styles.module.css';
import { cn } from '@/lib/cn';
import Image from 'next/image';

export const HeroBanner: FC = () => {
  return (
    <section id={styles["hero-banner"]}>
      <div className={cn(styles.spotlights, styles.spotlightOne)} />
      <div className={cn(styles.spotlights, styles.spotlightTwo)} />

      <div className={styles.content}>
        <div className={styles.layout}>
          <div className={styles.data}>
            <div className={styles.preHeading}>
              <span>Servicios de Distribución</span>
            </div>
            <h1 className={styles.heading}>
              Servicios que conectan tu carga con el destino final
            </h1>
            <p className={styles.description}>
              Operamos como un centro de distribución donde recibimos, clasificamos y alistamos&nbsp;
              la paquetería de nuestro proveedor logístico para que cada envío llegue a tiempo y en&nbsp;
              las condiciones correctas.
            </p>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/transporte-paquetes.png"
              width={1024}
              height={576}
              alt="Transporte de paquetes en camión y motocicleta"
              className={styles.image}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
