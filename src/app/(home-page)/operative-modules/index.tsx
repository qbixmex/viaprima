import { Icon } from "@iconify/react";
import { cards } from "./data";
import { Card } from "../hero-master/card";
import styles from "./styles.module.css";

export const OperativeModules = () => {
  return (
    <section className={styles.operativeModules}>
      <article className={styles.article}>
        <header className={styles.header}>
          <div className="max-w-2xl">
            <div className={styles.badge}>
              <Icon icon="mdi:truck" className="text-[18px]" />
              <span>Operación en Cada Etapa</span>
            </div>

            <h2 className={styles.title}>
              Distribución que mueve tus envíos
            </h2>

            <p className={styles.description}>
              Recibimos los paquetes en nuestro centro de distribución, los
              clasificamos y coordinamos su salida para que nuestros
              repartidores puedan llevarlos hasta el domicilio indicado.
            </p>
          </div>
        </header>

        <section className={styles.cards}>
          {cards.map((card) => <Card key={card.index} card={card} />)}
        </section>
      </article>
    </section>
  );
};
