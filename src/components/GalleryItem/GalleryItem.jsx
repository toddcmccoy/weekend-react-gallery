import './Item.css';
import GalleryItemButtons from '../GalleryItemButtons/GalleryItemButtons.jsx';

function GalleryItem ({ galleryItem, likeItem }) {

return (
<div className="galleryItem">
    <p>{item.name}</p>
    <p>{item.quantity} {item.unit}</p>
    <ItemButtons 
    item={item} 
    updateItem={updateItem}
    />
</div>
)
};

export default GalleryItem;