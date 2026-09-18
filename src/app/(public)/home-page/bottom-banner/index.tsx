import type { FC } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { CheckList } from './check-list';
import styles from './styles.module.css';

export const BottomBanner: FC = () => {
  return (
    <section className={styles.bottomBanner}>
      <div className={styles.spotlightOne} />
      <div className={styles.spotlightTwo} />

      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.columnOne}>
            <div className={styles.badge}>
              <Icon icon="material-symbols:verified" className={styles.badgeIcon} />
              <span>Identidad & Confianza Operativa</span>
            </div>

            <h2 className={styles.title}>
              ViaPrima: Tu paquete en el camino correcto.
            </h2>

            <p className={styles.description}>
              Unimos tecnología, logística de precisión y presencia local para
              que cada destinatario reciba su paquete en el tiempo acordado y
              con total tranquilidad.
            </p>

            <div className={styles.card}>
              <div className={styles.cardLayout}>
                <figure>
                  <Icon
                    icon="material-symbols:info"
                    className={styles.cardIcon}
                    aria-label="Icono de exclamación"
                  />
                </figure>
                <div>
                  <h2 className={styles.cardTitle}>
                    Claridad Institucional y Operativa
                  </h2>
                  <p className={styles.cardDescription}>
                    ViaPrima opera como una empresa y centro de distribución
                    independiente. Colaboramos estrechamente con proveedores
                    logísticos aliados, gestionando la recepción de carga mayorista y la ejecución
                    directa en nuestra zona de cobertura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.columnTwo}>
            <article className={styles.distribution}>
              <h3 className={styles.distributionTitle}>
                Centro de Distribución <i><span className="text-primary">Via</span><span className="text-secondary">Prima</span></i>
              </h3>
              <p className={styles.distributionSubtitle}>
                Centro Operativo Autorizado
              </p>
            </article>
            <div className={styles.distributionCheckList}>
              <CheckList />
            </div>
            <div className={styles.distributionSubCard}>
              <p>¿ Necesitas soporte con un envío ?</p>
              <Link href="/contacto">
                <span>Ponte en contacto con nosotros</span>
                <Icon icon="material:arrow_forward" className="text-[16px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
