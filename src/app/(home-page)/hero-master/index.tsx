import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const HeroMaster = () => {
  return (
    <section className={styles.heroMaster}>
      <div className={styles.container}>
        <div className={styles.data}>
          <h1 className={styles.title}>
            Tu paquete, más cerca de su destino
          </h1>
          <p className={styles.description}>
            En&nbsp;
            <b>
              <i>
                <span className={styles.accentBlue}>Via</span>
                <span className={styles.accentRed}>Prima</span>
              </i>
            </b>&nbsp;
            somos un centro de distribución especializado en la&nbsp;
            recepción, organización y preparación de paquetes para su entrega&nbsp;
            a domicilio.&nbsp;
            Somos un proveedor logístico que facilita la distribución de&nbsp;
            paquetes y conecta los centros de operación con los domicilios&nbsp;
            de nuestros clientes.
          </p>

          <div className={styles.badge}>
            <Icon icon="mdi:electricity" className={styles.badgeIcon} />
            <span className={styles.badgeText}>
              <span className={styles.accentBlue}>Recibimos</span>
              <span className={styles.accentRed}>Organizamos</span>
              <span className={styles.accentAmber}>Distribuimos</span>
            </span>
          </div>

          <Link href="/servicios" className={styles.cta}>
            <Icon icon="mdi:arrow-right-bold" className={styles.ctaIcon} />
            <span>Conoce nuestros servicios</span>
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/via_prima_logo.png"
            alt="Centro de clasificación automatizado de paquetería"
            width={512}
            height={512}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};
