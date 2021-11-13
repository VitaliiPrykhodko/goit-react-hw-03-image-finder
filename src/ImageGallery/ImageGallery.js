import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css"

const ImageGallery = ({pictures, handleLargeImage}) => {
  return (
    <ul className={styles.gallery}>
      <ImageGalleryItem pictures={pictures} handleLargeImage={handleLargeImage}/>
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
  handleLargeImage: PropTypes.func.isRequired
};

export { ImageGallery };
