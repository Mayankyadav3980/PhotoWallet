import React, { useEffect, useState } from "react";
import styles from './AlbumList.module.css'
import { db } from "../../firebaseInit";
import { onSnapshot, collection, orderBy } from "firebase/firestore";
import  Card  from '../Card/Card'
import AlbumForm from "../AlbumForm/AlbumForm";
import ImageList from "../ImageList/ImageList";

const AlbumList = () => {
    const [albumList, setAlbumList] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [openAlbum, setOpenAlbum] = useState({
      albumId: "5FTASPJYo4JkgjZharZG",
      open: true,
    });

    useEffect(()=>{
      const unsub = onSnapshot(collection(db, "albums"), (snapShot)=>{
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
      <div className={styles.main_container}>
        {!openAlbum.open ? (
          <>
            {!showForm && (
              <div className={styles.btndiv}>
                <button
                  className={styles.btn}
                  onClick={() => setShowForm(!showForm)}
                >
                  Add Album
                </button>
              </div>
            )}

            {showForm && <AlbumForm />}
            <div className={styles.container}>
              <h2 className={styles.heading}>Your Albums</h2>
              <div className={styles.album_list}>

                {albumList.map((album, idx) => {
                  return (
                    <Card key={idx} album={album} setOpenAlbum={setOpenAlbum} />
                  );
                })}
              </div>
            </div>
          </>
        ) : (<ImageList openAlbum={openAlbum} setOpenAlbum={setOpenAlbum} />)
        }
      </div>
    );
}

export default AlbumList;