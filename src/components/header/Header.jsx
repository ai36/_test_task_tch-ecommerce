import { Container, Logo } from '@/components';
import styles from './header.module.css';

export const Header = () => {
  return (
    <Container>
      <header className={styles.header}>
        <Logo />
      </header>
    </Container>
  );
}