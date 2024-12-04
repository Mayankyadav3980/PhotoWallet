import React from 'react'
import styles from './ImageCard.module.css'

const ImageCard = () => {
  return (
    <div className={styles.img_card}>
      <div className={styles.img_box}>
        <img
          src="https://lp-cms-production.imgix.net/2024-10/500pxRF93267455.jpg?fit=crop&w=3840&auto=format&q=75"
          alt=""
          style={{width:"100%", height:"100%"}}
        />
      </div>
      <h3 className={styles.img_title}>Image title</h3>
    </div>
  );
}

export default ImageCard