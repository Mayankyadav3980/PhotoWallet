import React, { useEffect, useState } from 'react'
import ImageForm from '../ImageForm/ImageForm'
import styles from './ImageList.module.css'
import { onSnapshot } from 'firebase/firestore'

const ImageList = ({openAlbum, setOpenAlbum}) => {
  const [photoList, setPhotoList] = useState([]);

  useEffect(()=>{
    const unsub = onSnapshot(doc(db, 'albums',openAlbum.albumId), (doc) => {
      const data = doc.data().photoList;
      setPhotoList(data);
      console.log(data);
      
    })
  },[])

  return (
    <>
      <button onClick={() => setOpenAlbum({ ...openAlbum, open: false })}>
        back
      </button>
      <ImageForm />
      <div className={styles.container}>
        <h2 className={styles.heading}>Your Images</h2>
        <div className={styles.image_list}>
          <div>1st img</div>
        </div>
      </div>
    </>
  );
}

export default ImageList