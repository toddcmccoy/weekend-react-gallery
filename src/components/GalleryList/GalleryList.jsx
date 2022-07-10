import GalleryItem from '../GalleryItem/GalleryItem.jsx';

// function to display the gallery items on the page
function GalleryList ({galleryList, likeImage}) {
  return (
    
    
    // using .map to loop through the array of gallery items and display them on the page
    <>
        {galleryList.map((galleryItem) => {
        return (
            <div className = 'img' key = {galleryItem.id} >
                <GalleryItem
              
                galleryItem={galleryItem}
                likeImage={likeImage}
                />
            </div>)
    })}
    </>
  )
};
// end galleryList function
export default GalleryList;