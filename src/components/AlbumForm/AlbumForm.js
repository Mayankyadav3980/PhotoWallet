import React, { useState } from 'react'
import AlbumFormStyles from "./AlbumForm.module.css";
import { db } from '../../firebaseInit'
import { addDoc, collection } from 'firebase/firestore'


const AlbumForm = () => {
  const [albumName, setAlbumName] = useState("");

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "albums"), {
        albumName: albumName,
        photoList: [],
        date: new Date(),
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
        <input
          placeholder="enter album name"
          className={AlbumFormStyles.item1}
          onChange={(e) => setAlbumName(e.target.value)}
          value={albumName}
          required
        />
        <button className={AlbumFormStyles.item2} onClick={handleSubmit}>
          Create
        </button>
      </div>
    </div>
  );
};

export default AlbumForm;