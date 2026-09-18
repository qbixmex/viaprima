import type { FC } from "react";
import { Icon } from "@iconify/react";
import { checkList } from "./data";
import styles from "./styles.module.css";

export const CheckList: FC = () => {
  return (
    <div className={styles.distributionCheckList}>
      {checkList.map((item) => (
        <div key={item} className={styles.listItem}>
          <Icon icon="mdi:check-circle" className={styles.icon} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};