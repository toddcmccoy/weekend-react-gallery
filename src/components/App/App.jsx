import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'


function App() {

  let [galleryList, setGalleryList] = useState([]);
  let [imageLikes, setImageLikes] = useState('');

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



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <h2>My Menagerie: past and present</h2>
        <div>
          <GalleryList
          galleryList={galleryList} 
          getGalleryList={getImages} 
          />
        </div>
      </div>
    );
}

export default App;
