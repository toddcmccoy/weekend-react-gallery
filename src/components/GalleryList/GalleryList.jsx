import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList ({galleryList, getImages}) {
  return (
    
    <>
        {galleryList.map((galleryItem) => {
        return (
            <div className = 'img' key = {galleryItem.id}>
                <GalleryItem 
                galleryItem={galleryItem}
                getImages={getImages}
                />
            </div>)
    })}
    </>
  )
};

export default GalleryList;