import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, error, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja apagar a foto?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
      <Error error={error} />
    </>
  );
};

export default PhotoDelete;
