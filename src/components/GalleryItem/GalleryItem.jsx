import React, {useState} from 'react';
import '../App/App.css';


// function to create the item for display in the gallery


function GalleryItem ({ galleryItem, likeImage}) {

const [hiddenDescription, setHiddenDescription] = useState();

//ternary operator to toggle display of gallery image and image description
// onClick to register and store likes

const handleImageDescription = () => {
    if (hiddenDescription) {
    setHiddenDescription(false);
} else {
    setHiddenDescription(true);
}
};

return (
<div>
    {hiddenDescription ? (
        <button className = 'desc_button' onClick={handleImageDescription}>{galleryItem.description}</button>
        ) : (
        <img onClick={handleImageDescription} src={galleryItem.path}/>
    )}
    <br></br>
    <button className = "like button" onClick={() => likeImage(galleryItem)}>Like!</button> 
    <p>{galleryItem.likes} Likes</p>

</div>
    
)
};
// end GalleryItem function
export default GalleryItem;