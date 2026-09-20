import type { FC } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from '@iconify/react';
import type { ServiceType } from '../data';
import styles from './styles.module.css';

type Props = Readonly<{
  service: Omit<ServiceType, 'id'>;
}>;

export const Service: FC<Props> = ({ service }) => {
  return (
    <div className={cn(["group", styles.service, service.highlight])}>
      <div className={styles.header}>
        <span
          className={cn(
            styles.tag,
            service.accent.split(" ").slice(0, 3).join(" ")
          )}
        >{service.tag}</span>
        <div className={cn(styles.iconWrapper, service.accent)}>
          <Icon icon={service.icon} className={styles.icon} />
        </div>
      </div>

      <h3 className={styles.title}>
        {service.title}
      </h3>

      <p className={styles.description}>
        {service.description}
      </p>

      <div className={styles.divider} />

      <ul className={styles.list}>
        {service.bullets.map((bullet, index) => (
          <li key={index} className={styles.listItem}>
            <Icon icon="material-symbols:circle" className={styles.listIcon} />
            <span className={styles.listBullet}>
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
