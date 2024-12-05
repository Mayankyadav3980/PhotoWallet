import React, { useState } from 'react'
import styles from './ImageCard.module.css'
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";


const ImageCard = ({imgDataObj}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouse = () => {
    // console.log('handle mouse triggered');
    
     setShowOptions(!showOptions);
  }

  const handleLeave = () => {
    setShowOptions(!showOptions);
  }
  return (
    <div
      className={styles.img_card}
      onMouseEnter={handleMouse}
      onMouseLeave={handleLeave}
    >
      <div className={styles.img_box}>
        <img
          src={imgDataObj.url}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      {/* <h3 className={styles.img_title}>{imgDataObj.title}</h3> */}

      {/*on delete & update btn */}

      <div className={styles.option_container}>
        {showOptions && (
          <button className={`${styles.btn} ${styles.del}`}>
            <GrUpdate />
          </button>
        )}
        <h3 className={styles.img_title}>{imgDataObj.title}</h3>
        {showOptions && (
          <button className={styles.btn}>
            <MdDelete />
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageCard