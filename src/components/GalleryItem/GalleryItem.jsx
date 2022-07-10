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

const likeImage = (id) => {
    axios.put(
    `/gallery/${id}`
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
        <h5 onClick={handleImageDescription}>{galleryItem.description}</h5>
        ) : (
        <img onClick={handleImageDescription} src={galleryItem.path}/>
    )}
    <br></br>
    <button data-id = {galleryItem.id} className = "like button" onClick={() => likeImage(galleryItem.id)}>Like!</button> 
    <p>{galleryItem.likes} Likes</p>

</div>
    
)
};

export default GalleryItem;