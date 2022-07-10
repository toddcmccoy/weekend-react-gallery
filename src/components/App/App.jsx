import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'


function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getImages()
  }, [])

  //Get request
  const getImages = () => {
    axios.get('/gallery')
    .then((response) => {
        console.log('GET /gallery',response.data)
        setGalleryList( response.data )
    }).catch((error) => {
        console.log( 'error in GET /gallery', error)
    })
  };

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
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <h2>My Home Zoo: past and present</h2>
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
