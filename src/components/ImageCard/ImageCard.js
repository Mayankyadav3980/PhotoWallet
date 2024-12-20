import React, { useState } from "react";
import styles from "./ImageCard.module.css";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { db } from "../../firebaseInit";
import { updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const ImageCard = ({
  id,
  imgDataObj,
  albumId,
  photoList,
  setUpdateImg,
  setShowForm,
  setShowModal,
  setCurrent,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  //getting the details of image clicked, and updating up updateImage hook.
  const updateImage = () => {
    setUpdateImg({
      idx: id,
      title: imgDataObj.title,
      url: imgDataObj.url,
      state: true,
    });
    setShowForm(true);
  };

  //function to delete the image from list in firestore
  const deleteImage = async () => {
    const newPhotoList = photoList.filter((obj, idx) => idx !== id);
    await updateDoc(doc(db, "albums", albumId), { photoList: newPhotoList });
    toast.success("Image deleted successfully");
  };
  return (
    <div
      className={styles.img_card}
      onMouseEnter={() => setShowOptions(!showOptions)}
      onMouseLeave={() => setShowOptions(!showOptions)}
    >
      <div
        className={styles.img_box}
        onClick={() => {
          setShowModal({ state: true, idx: id });
          setCurrent(id);
        }}
      >
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
            <MdModeEdit />
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

export default ImageCard;
