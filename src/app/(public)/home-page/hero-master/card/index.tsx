import type { FC } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/cn";
import type { OperativeCard } from "../../operative-modules/data";
import styles from "./styles.module.css";

type Props = Readonly<{ card: OperativeCard }>;

export const Card: FC<Props> = ({ card }) => {
  return (
    <article
      key={card.index}
      className={cn("group", styles.card, card.cardHover)}
    >
      <header className={cn(styles.header)}>
        <div className={cn(styles.iconWrapper, card.iconBox)}>
          <Icon icon={card.icon} className={styles.icon} />
        </div>
        <div className={cn(styles.cardNumber, card.numberStyles)}>
          {card.index}
        </div>
      </header>

      <div className={styles.content}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.description}>{card.description}</p>
      </div>

      <div
        className={cn(styles.subHeading, card.tagColor)}
      >
        <span>{card.tag}</span>
      </div>
    </article>
  );
};
