import React, { useEffect, useState } from 'react'
import ImageForm from '../ImageForm/ImageForm'
import styles from './ImageList.module.css'
import { db } from '../../firebaseInit'
import { onSnapshot, doc } from 'firebase/firestore'
import ImageCard from '../ImageCard/ImageCard'
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";;

const ImageList = ({openAlbum, setOpenAlbum}) => {
  const [photoList, setPhotoList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(()=>{
    const unsub = onSnapshot(doc(db, 'albums',openAlbum.albumId), (doc) => {
      const data = doc.data().photoList;
      setPhotoList(data);
      // console.log(typeof(data));
      // console.log(data);
      
    })
  },[])

  return (
    <>
      <div className={styles.btndiv}>
        <button
          className={styles.btn}
          onClick={() => setOpenAlbum({ ...openAlbum, open: false })}
        >
          <FaArrowLeft/>
        </button>
        <button className={styles.btn} onClick={() => setShowForm(!showForm)}>
          {showForm ? <ImCross/> : <FaPlus/> }
        </button>
      </div>

      {showForm && <ImageForm list={photoList} openAlbum={openAlbum}/>}
      <div className={styles.container}>
        <h2 className={styles.heading}>Your Images</h2>
        <div className={styles.image_list}>
          {photoList.map((imgDataObj, idx) => {
            return <ImageCard 
                    key={idx} 
                    imgDataObj={imgDataObj}
                    albumId = {openAlbum.albumId}
                    />;
          })}
        </div>
      </div>
    </>
  );
}

export default ImageList