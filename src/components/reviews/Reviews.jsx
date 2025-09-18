import Image from "next/image";
import { Icon } from "@/components";
import styles from "./reviews.module.css";
import { CTA_REVIEWS } from "@/constants";

export const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <ul className={styles.photosList}>
        {CTA_REVIEWS.photos.slice(-4).reverse().map((item) => (
          <li className={styles.photoItem} key={item}>
            <Image
              className={styles.photo}
              src={`/${item}.png`}
              alt={`Happy customer - ${item}`}
              width={35}
              height={35}
            />
          </li>
        ))}
      </ul>
      <div className={styles.desc}>
        <div className={styles.scoreBox}>
          <div className={styles.starBox}>
            {Array(Math.round(CTA_REVIEWS.averageScore))
              .fill(null)
              .map((_, index) => (
                <Icon name="star" key={index} />
              ))}
          </div>
          <span className={styles.score}>{CTA_REVIEWS.averageScore}</span>
        </div>
        <span className={styles.text}>{`+${new Intl.NumberFormat(
          "en-US"
        ).format(CTA_REVIEWS.counter)} with Verified Reviews`}</span>
      </div>
    </div>
  );
};
