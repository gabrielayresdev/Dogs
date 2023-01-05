import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';

const PhotoContent = ({ data }) => {
  console.log(data);
  const { photo, comments } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoContent;
