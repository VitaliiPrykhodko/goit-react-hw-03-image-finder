import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css"

const ImageGalleryItem = ({ pictures }) => {
  return pictures.map(({ id, webformatURL, user }) => {
    return (
      <li key={id} className={styles.galleryItem}>
        <img src={webformatURL} alt={user} />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
};

export { ImageGalleryItem };
