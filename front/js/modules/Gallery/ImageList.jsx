import React, { useState, useEffect } from 'react';
import service from 'services/home';


const GalleryColumn = ({ imageList }) => (
  <div className="gallery__section">
    { imageList.map((item, index) => <img key={`image-${index}`} src={item.url} />) }
  </div>
);


const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    service.fetchGallery()
      .then(response => setImages(response.images))
  }, []);

  const numberList = 3;

  let i = 0;
  const content = Array.from(new Array(numberList)).map(_ => []);
  images.forEach(item => {
    if(i >= numberList) i = 0;
    
    content[i].push(item);
    i = i + 1;
  });

  return(
    <div className="gallery">
      {
        content.map((imageList, index) => <GalleryColumn key={`column-${index}`} imageList={imageList} />)
      }
    </div>

      
    //   { 
    //     images.map(image => {
    //       return (
    //         <div>
    //           <img src={image.url}/>
    //         </div>
    //       )
    //     })
    //   }
    // </div>
  )
}

export default ImageList;