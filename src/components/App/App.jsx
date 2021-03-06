//importing necessary dependencies to ensure the page displays correctly
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'


function App() {
//defining the gallery
  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getImages()
  }, [])

  //Get request for images and descriptions
  const getImages = () => {
    axios.get('/gallery')
    .then((response) => {
        console.log('GET /gallery',response.data)
        setGalleryList( response.data )
    }).catch((error) => {
        console.log( 'error in GET /gallery', error)
    })
  };
//Put request to register 'likes' for each image
  const likeImage = (galleryItem) => {
    console.log('galleryItem.id', galleryItem.id);
    axios.put(
    (`/gallery/like/${galleryItem.id}`)
    ).then(() => {
        console.log('galleryItem.likes', galleryItem.likes)
        getImages();
    }).catch((error) => {
        alert('Something went wrong in the PUT /gallery')
    })
};



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Home Zoo: Past and Present</h1>
        </header>
        <div>
          <GalleryList
          galleryList={galleryList} 
          getGalleryList={getImages}
          likeImage={likeImage} 
          />
        </div>
      </div>
    );
}

export default App;
