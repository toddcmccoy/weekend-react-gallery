import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function GalleryList ({galleryList, likeImage}) {
  return (
    
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

export default GalleryList;