import type { FC } from 'react';
import { services } from './data';
import styles from './styles.module.css';
import { Service } from './service';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export const ServicesList: FC = () => {
  return (
    <section className={styles.servicesList}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="max-w-2xl">
            <h2 className={styles.title}>Nuestra oferta de valor</h2>

            <p className={styles.description}>
              En cada servicio entregamos resultados medibles y comunicación
              constante para que la operación sea transparente de inicio a fin.
            </p>
          </div>
          <Link href="/contacto" className={styles.link}>
            <Icon icon="material-symbols:mail" className="text-[20px]" />
            <span>Solicitar servicio</span>
          </Link>
        </div>

        <div className={styles.services}>
          {services.map(({ id, ...service }) => (
            <Service key={id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
