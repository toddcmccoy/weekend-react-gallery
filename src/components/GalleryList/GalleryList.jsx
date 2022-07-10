import galleryItems from '../../../server/modules/gallery.data.js';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import ListButtons from '../ListButtons/ListButtons.jsx';

function GalleryList ({galleryList, likeItem) {
  return (
    <>
    <div id="galleryList">
        {galleryList.map(galleryItems =>
        <GalleryItem 
        key={galleryItems.id}
        galleryItem={galleryItems.path}
        likeItem={likeItem}
        />
        )}
    </div>
    </>
  )
};

export default List;