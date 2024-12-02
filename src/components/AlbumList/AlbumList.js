import React, { useEffect, useState } from "react";
import styles from './AlbumList.module.css'
import { db } from "../../firebaseInit";
import { onSnapshot, collection, orderBy } from "firebase/firestore";
import  Card  from '../Card/Card'

const AlbumList = () => {
    const [albumList, setAlbumList] = useState([]);

    useEffect(()=>{
      const unsub = onSnapshot(collection(db, "albums"), orderBy("date", "desc"), (snapShot)=>{
        const list = snapShot.docs.map(doc => {
          return {
            id:doc.id,
            ...doc.data()
          }
        })
        setAlbumList(list);
      })

    },[])
    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>Your Albums</h2>
        <div className={styles.album_list}>

          {/* display all album  list below */}
          {/* <div className={styles.album}>album1</div> */}
          {/* <Card/> */}
          

          {albumList.map((album, idx) => {
            return <Card 
                    key={idx} 
                    album={album}
                    />
          })}
        </div>
      </div>
    );
}

export default AlbumList;