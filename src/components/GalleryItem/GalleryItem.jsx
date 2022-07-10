import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App/App.css';

function GalleryItem ({ galleryItem, likeImage}) {

const [hiddenDescription, setHiddenDescription] = useState();
// const [imageLikes, setImageLikes] = useState();

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

export default GalleryItem;