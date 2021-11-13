import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css"

const ImageGallery = ({pictures}) => {
  return (
    <ul className={styles.gallery}>
          <ImageGalleryItem pictures={pictures}/>
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
};

export { ImageGallery };
