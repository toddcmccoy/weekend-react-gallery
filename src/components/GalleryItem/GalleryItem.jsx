import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App/App.css';

function GalleryItem ({ galleryItem, getImages }) {

const [hiddenDescription, setHiddenDescription] = useState();

const handleImageDescription = () => {
    if (hiddenDescription) {
    setHiddenDescription(false);
} else {
    setHiddenDescription(true);
}
};

const likeImage = (galleryItem, likes) => {
    // let id = galleryItem.id;

    // galleryItem.likes += 1;

    axios.put(
    (`/gallery/likes/${galleryItem.id}`, {likes: galleryItem.likes})
    ).then((response) => {
        getImages();
        console.log('Image is liked:', id);
    }).catch((error) => {
        alert('Something went wrong in the PUT /gallery :(')
    })
};

return (
<div>
    {hiddenDescription ? (
        <button className = 'desc_button' onClick={handleImageDescription}>{galleryItem.description}</button>
        ) : (
        <img onClick={handleImageDescription} src={galleryItem.path}/>
    )}
    <br></br>
    <button className = "like button" onClick={() => likeImage()}>Like!</button> 
    <p>{galleryItem.likes} Likes</p>

</div>
    
)
};

export default GalleryItem;