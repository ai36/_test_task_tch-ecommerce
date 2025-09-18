import { CtaHelperCard } from "@/components";
import styles from "./ctaHelper.module.css";
import { CTA_HELPER_CONTENT } from "@/constants";

export const CtaHelper = () => {
  return (
    <ul className={styles.ctaHelper}>
      {CTA_HELPER_CONTENT.map((item) => (
        <li className={styles.ctaHelperItem} key={item.icon}>
          <CtaHelperCard content={item} />
        </li>
      ))}
    </ul>
  );
};
