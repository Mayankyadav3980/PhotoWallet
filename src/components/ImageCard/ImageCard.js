import React, { useState } from 'react'
import styles from './ImageCard.module.css'
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { db } from '../../firebaseInit';
import { updateDoc, doc } from 'firebase/firestore';


const ImageCard = ({
  id,
  imgDataObj,
  albumId,
  photoList,
  updateImg,
  setUpdateImg,
  setShowForm,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const updateImage = () => {
    setUpdateImg({
      idx: id,
      title: imgDataObj.title,
      url: imgDataObj.url,
      state: true,
    });
    // setUpdateImg((pv) => !pv);
    setShowForm(true);
  };

  const deleteImage = async () => {
    const newPhotoList = photoList.filter((obj, idx) => idx != id);
    await updateDoc(doc(db, "albums", albumId), { photoList: newPhotoList });
  };
  return (
    <div
      className={styles.img_card}
      onMouseEnter={() => setShowOptions(!showOptions)}
      onMouseLeave={() => setShowOptions(!showOptions)}
    >
      <div className={styles.img_box}>
        <img
          src={imgDataObj.url}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.option_container}>
        {showOptions && (
          <button
            className={`${styles.btn} ${styles.del}`}
            onClick={updateImage}
          >
            <GrUpdate />
          </button>
        )}
        <h3 className={styles.img_title}>{imgDataObj.title}</h3>
        {showOptions && (
          <button className={styles.btn} onClick={deleteImage}>
            <MdDelete />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageCard