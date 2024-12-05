import React from 'react'
import styles from './ImageCard.module.css'

const ImageCard = ({imgDataObj}) => {
  return (
    <div className={styles.img_card}>
      <div className={styles.img_box}>
        <img
          src={imgDataObj.url}
          alt=""
          style={{width:"100%", height:"100%"}}
        />
      </div>
      <h3 className={styles.img_title}>{imgDataObj.title}</h3>
    </div>
  );
}

export default ImageCard