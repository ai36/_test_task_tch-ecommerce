import { Button, Container } from "@/components";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <Container>
      <div className={styles.hero}>
        Boost Your Heart
        <br /> Health & Energy with
        <span className={styles.accent}>Nitric Oxide Gummies</span>
        <Button
          className={styles.button}
          icon="arrow"
          href="#"
          variant="secondary"
        />
      </div>
    </Container>
  );
};
