import type { FC } from 'react';
import type { Channel } from '../data';
import { cn } from '@/lib/cn';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';

type Props = Readonly<{
  channel: Omit<Channel, 'id'>;
}>;

export const ChannelCard: FC<Props> = ({ channel }) => {

  return (
    <div className={styles.card}>
      <div className={cn(styles.iconWrapper, channel.box)}>
        <Icon icon={channel.icon} className="text-[24px]" />
      </div>

      <h3 className={styles.cardTitle}>
        {channel.title}
      </h3>

      <p className={styles.cardDescription}>
        {channel.description}
      </p>

      <p className={cn(styles.cardSubtitle, channel.color)}>
        <Icon icon="verified" className="text-[18px]" />
        {channel.value}
      </p>
    </div>
  );
};
