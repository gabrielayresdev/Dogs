import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <Dogs />
        </Link>
        <Link to="/Login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
