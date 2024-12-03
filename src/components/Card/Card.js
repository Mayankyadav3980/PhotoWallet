import React from 'react'
import styles from './Card.module.css'
import { BiPhotoAlbum } from "react-icons/bi";

const Card = ({album, setOpenAlbum}) => {
  const handleClick = () => {
    setOpenAlbum({albumId:album.id, open:true})
  }

  return (
    <div className={styles.card_container} onClick={handleClick}>
      {/* <div className={styles.thumbnail}> */}
      <BiPhotoAlbum className={styles.thumbnail} />
      {/* </div> */}
      <h3 className={styles.card_heading}>{album.albumName}</h3>
    </div>
  );
}

export default Card