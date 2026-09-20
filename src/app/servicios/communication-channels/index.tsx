import type { FC } from 'react';
import { Icon } from '@iconify/react';
import { channels } from './data';
import { ChannelCard } from './card';
import styles from './styles.module.css';

export const CommunicationChannels: FC = () => {
  return (
    <section className={styles.communicationChannels}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.preTitle}>
              <div className={styles['icon-title']}>
                <Icon icon="material-symbols:alternate-email" className="text-[18px]" />
                <span>Vías de Atención Operativa</span>
              </div>
              <h2 className={styles.title}>Canales de comunicación</h2>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIconText}>
                <span>Respuesta garantizada en jornada operativa</span>
                <Icon icon="material-symbols:schedule" className={styles.badgeIcon} />
              </div>
            </div>
          </div>

          <div className={styles.body}>
            {channels.map(({ id, ...channel }) => (
              <ChannelCard key={id} channel={channel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
