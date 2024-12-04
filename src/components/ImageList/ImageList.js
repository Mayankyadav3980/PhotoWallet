import React, { useEffect, useState } from 'react'
import ImageForm from '../ImageForm/ImageForm'
import styles from './ImageList.module.css'
import { db } from '../../firebaseInit'
import { onSnapshot, doc } from 'firebase/firestore'
import ImageCard from '../ImageCard/ImageCard'

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
          <ImageCard imgObj={{title:'t', url:'u'}}

          />
        </div>
      </div>
    </>
  );
}

export default ImageList