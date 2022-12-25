import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input id={name} className={styles.input} type={type}></input>
      <p className={styles.erro}>Error</p>
    </div>
  );
};

export default Input;
