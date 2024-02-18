import { motion } from 'framer-motion';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './gallery.scss';

const images = [
  {
    original: 'img1.jpg',
    thumbnail: 'img1.jpg',
    description: 'Description 1',
  },
  {
    original: 'img2.jpg',
    thumbnail: 'img2.jpg',
    description: 'Description 2',
  },
  {
    original: 'img3.jpg',
    thumbnail: 'img3.jpg',
    description: 'Description 3',
  },
];

const GalleryCarousel = () => {
  return (
    <motion.div className="carousel-div" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Gallery items={images} />
    </motion.div>
  );
};

export default GalleryCarousel;
