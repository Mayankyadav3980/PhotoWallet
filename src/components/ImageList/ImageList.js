import React, { useEffect, useState } from 'react'
import ImageForm from '../ImageForm/ImageForm'
import styles from './ImageList.module.css'
import { db } from '../../firebaseInit'
import { onSnapshot, doc } from 'firebase/firestore'
import ImageCard from '../ImageCard/ImageCard'
import {
  FaArrowLeft,
  FaPlus,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";

const ImageList = ({openAlbum, setOpenAlbum}) => {
  const [photoList, setPhotoList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [updateImg, setUpdateImg] = useState({state:false, idx:'', title:'',url:''});
  const [showModal, setShowModal] = useState({state: false, idx:0});
  const [current, setCurrent] = useState(0);
  let lenght = photoList.length;

  const prevImg = () => {
    setCurrent(current == 0 ? lenght - 1 : current - 1);
  };

  const nextImg = () => {
    setCurrent(current == lenght - 1 ? 0 : current + 1);
  };

  useEffect(()=>{
    const unsub = onSnapshot(doc(db, 'albums',openAlbum.albumId), (doc) => {
      const data = doc.data().photoList;
      setPhotoList(data);      
    })
  },[])

  return (
    <>
      <div className={styles.btndiv}>
        <button
          className={styles.btn}
          onClick={() => setOpenAlbum({ ...openAlbum, open: false })}
        >
          <FaArrowLeft />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            setShowForm(!showForm);
            setUpdateImg({ ...updateImg, state: false });
          }}
        >
          {showForm ? <ImCross /> : <FaPlus />}
        </button>
      </div>

      {showForm && (
        <ImageForm
          list={photoList}
          openAlbum={openAlbum}
          updateImg={updateImg}
        />
      )}

      <div className={styles.container}>
        {photoList.length === 0 ? (
          <h2 className={styles.heading}>Oops! no images in your collection</h2>
        ) : (
          <h2 className={styles.heading}>Your collection</h2>
        )}
        <div className={styles.image_list}>
          {photoList.map((imgDataObj, idx) => {
            return (
              <ImageCard
                key={idx}
                id={idx}
                imgDataObj={imgDataObj}
                albumId={openAlbum.albumId}
                photoList={photoList}
                setUpdateImg={setUpdateImg}
                setShowForm={setShowForm}
                setShowModal={setShowModal}
                setCurrent={setCurrent}
              />
            );
          })}
        </div>
      </div>

      {/* modal */}
      {showModal.state && (
        <div className={styles.carousel_container} >
          
          <ImCross 
          className={styles.cls_btn}
          onClick={()=>setShowModal({...showModal,state:false})}
          />
          <FaArrowAltCircleLeft
            className={`${styles.left_arrow} ${styles.arrow}`}
            onClick={prevImg}
          />
          <FaArrowAltCircleRight
            className={`${styles.right_arrow} ${styles.arrow}`}
            onClick={nextImg}
          />
          <div className={styles.modal}>
            {photoList.map((obj, idx) => {
              if (current == idx)
                return (
                  <img
                    key={idx}
                    className={styles.carousel_image}
                    src={obj.url}
                    alt="img"
                  />
                );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageList