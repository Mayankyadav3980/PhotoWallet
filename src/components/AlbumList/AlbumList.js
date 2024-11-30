import React from "react";
import styles from './AlbumList.module.css'

const AlbumList = () => {
    return (
      <div className={styles.container}>
        <h3 className={styles.heading}>Your Albums</h3>
        <div className={styles.album_list}>

          {/* display all album collection list below */}
          <div className={styles.album}>album1</div>
          <div className={styles.album}>album2</div>
          <div className={styles.album}>album3</div>
          <div className={styles.album}>album3</div>
          <div className={styles.album}>album3</div>
          <div className={styles.album}>album3</div>
          <div className={styles.album}>album3</div>
          <div className={styles.album}>album3</div>
        </div>
      </div>
    );
}

export default AlbumList;