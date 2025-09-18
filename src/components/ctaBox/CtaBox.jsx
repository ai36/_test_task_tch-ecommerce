import { Container, CtaHelper, CtaMain } from "@/components";
import styles from "./ctaBox.module.css";

export const CtaBox = () => {
  return (
    <Container>
      <div className={styles.ctaBox}>
        <CtaMain />
        <CtaHelper />
      </div>
    </Container>
  );
};
