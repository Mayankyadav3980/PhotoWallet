import React from "react";
import styles from "./Card.module.css";
import { BiPhotoAlbum } from "react-icons/bi";

const Card = ({ album, setOpenAlbum }) => {
  //function to set albumId and respectively show list of images in that album
  const handleClick = () => {
    setOpenAlbum({ albumId: album.id, open: true });
  };

  return (
    <div className={styles.card_container}>
      <div onClick={handleClick}>
        <BiPhotoAlbum className={styles.thumbnail} />
      </div>
      <div className={styles.cont2}>
        <h3 className={styles.card_heading}>{album.albumName}</h3>
      </div>
    </div>
  );
};

export default Card;
