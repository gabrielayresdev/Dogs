import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [page, setPage] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

      if (infinite) {
        if (scroll > 0.75 * height && !wait) {
          setPage((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 1000);
        }
      }
    }

    window.addEventListener('weel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('weel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {page.map((page) => (
        <FeedPhotos
          user={user}
          key={page}
          page={page}
          setInfinite={setInfinite}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </div>
  );
};

Feed.defautlProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
};

export default Feed;
