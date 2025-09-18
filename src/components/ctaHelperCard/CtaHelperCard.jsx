import { Icon } from "@/components";
import styles from "./ctaHelperCard.module.css";

export const CtaHelperCard = ({ content }) => {
  const { icon, title, desc } = content;

  return (
    <div className={styles.ctaHelperCard}>
      <Icon name={icon} />
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.desc}>{desc}</span>
    </div>
  );
};
