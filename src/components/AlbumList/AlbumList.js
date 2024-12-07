import React, { useEffect, useState } from "react";
import styles from './AlbumList.module.css'
import { db } from "../../firebaseInit";
import { onSnapshot, collection, orderBy } from "firebase/firestore";
import  Card  from '../Card/Card'
import AlbumForm from "../AlbumForm/AlbumForm";
import ImageList from "../ImageList/ImageList";
import Spinner from "react-spinner-material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AlbumList = () => {
    const [albumList, setAlbumList] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [openAlbum, setOpenAlbum] = useState({
      // albumId: "5FTASPJYo4JkgjZharZG",
      albumId: "6eXkPuY09N1Sjg9CsKFT",
      open: false,
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
        setLoading(false);
      })

    },[])

    return (
      <>
        {loading ? (
          <div className={styles.spinner_cont}>
            <Spinner visible={true} radius={60} color={"black"} stroke={5} />
          </div>
        ) : (
          <div className={styles.main_container}>
            <ToastContainer autoClose={4000} theme='dark' />
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
                        <Card
                          key={idx}
                          album={album}
                          setOpenAlbum={setOpenAlbum}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <ImageList openAlbum={openAlbum} setOpenAlbum={setOpenAlbum} />
            )}
          </div>
        )}
      </>
    );
}

export default AlbumList;