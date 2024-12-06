import React, { useState } from 'react'
import AlbumFormStyles from "./AlbumForm.module.css";
import { db } from '../../firebaseInit'
import { addDoc, collection } from 'firebase/firestore'


const AlbumForm = () => {
  const [albumName, setAlbumName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "albums"), {
        albumName: albumName,
        photoList: [],
      });
      setAlbumName("");
      //  alert("new album created!!");
    } catch (e) {
      console.log("error is: " + e);
    }
  };

  return (
    <div className={AlbumFormStyles.container}>
      <h3 className={AlbumFormStyles.heading}>Create a new album</h3>
      <div className={AlbumFormStyles.container1}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="enter album name"
            className={AlbumFormStyles.input_field}
            onChange={(e) => setAlbumName(e.target.value)}
            value={albumName}
            required
          />
          <button className={AlbumFormStyles.sbt_btn}>Create</button>
          <button className={AlbumFormStyles.sbt_btn} onClick={()=>setAlbumName('')}>Clear</button>
        </form>
      </div>
    </div>
  );
};

export default AlbumForm;