import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css"

const ImageGalleryItem = ({ pictures, handleLargeImage }) => {
  return pictures.map(({ id, webformatURL, user, largeImageURL }) => {
    return (
      <li onClick={()=>handleLargeImage(largeImageURL, user)} key={id} className={styles.galleryItem}>
        <img className={styles.img} src={webformatURL} alt={user} data-image={largeImageURL} />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
  handleLargeImage: PropTypes.func.isRequired
};

export { ImageGalleryItem };
