import Image from "next/image";
import { Button, Icon, Reviews } from "@/components";
import styles from "./ctaMain.module.css";
import { CTA_CHIPSET, CTA_LABELS } from "@/constants";

export const CtaMain = () => {
  return (
    <section className={styles.ctaMain}>
      <div className={styles.wrapper}>
        <div className={styles.compositeImage}>
          <Image
            className={styles.back}
            src={"/cta-image-back.png"}
            alt={`Nitric oxide peach gimmies`}
            width={613}
            height={613}
          />
          <Image
            className={styles.front}
            src={"/cta-image-front.png"}
            alt={`Nitric oxide cherry gimmies`}
            width={613}
            height={613}
          />
          <Image
            className={styles.black}
            src={"/cta-image-label-black.png"}
            alt={`Nitric oxide today price`}
            width={613}
            height={613}
          />
          <Image
            className={styles.pink}
            src={"/cta-image-label-pink.png"}
            alt={`Nitric oxide free bottle`}
            width={613}
            height={613}
          />
        </div>
        <div className={styles.content}>
          <Reviews />
          <h1 className={styles.title}>
            Boost Your Heart Health & Energy with Nitric Oxide Gummies
          </h1>
          <span className={styles.subtitle}>
            Heart-boosting gummies for daily vitality & overall well-being
          </span>
          <Button
            className={styles.button}
            text="Order Now"
            icon="buttonsArrow"
          />
          <ul className={styles.labelsList}>
            {CTA_LABELS.map((item) => (
              <li className={styles.labelItem} key={item.icon}>
                <Icon name={item.icon} />
                <span className={styles.labelCardTitle}>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.certsList}>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <li
                className={styles.certsItem}
                key={`/bnr-prod-ing${index + 1}.png`}
              >
                <Image
                  className={styles.certsPic}
                  src={`/bnr-prod-ing${index + 1}.png`}
                  alt="Production cert"
                  width={75}
                  height={75}
                />
              </li>
            ))}
        </ul>
      </div>

      <div className={styles.chipSetBox}>
        <h4 className={styles.chipSetBoxTitle}>Includes</h4>
        <ul className={styles.chipSetList}>
          {CTA_CHIPSET.map((item) => (
            <li className={styles.chipSetItem} key={item}>
              <Icon name="chipset" />
              <span className={styles.chipSetDesc}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
