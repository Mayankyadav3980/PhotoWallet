import React, { useState } from 'react'
import InputBoxStyles from './InputBox.module.css'
import { db } from '../../firebaseInit'
import { addDoc, collection } from 'firebase/firestore'


const InputBox = () => {
  const [albumName, setAlbumName] = useState("");

  const handleSubmit = async () => {
    try{
       await addDoc(collection(db, "albums"), {
        albumName: albumName,
        photoList: [],
        date: new Date()
       });
       setAlbumName("");
      //  alert("new album created!!");
    }catch(e){
      console.log('error is: ' + e);
    }
  }

  return (
    <div className={InputBoxStyles.container}>
      <h3 className={InputBoxStyles.heading}>Create a new album</h3>
      <div className={InputBoxStyles.container1}>
        <input
          placeholder="enter album name"
          className={InputBoxStyles.item1}
          onChange={(e)=> setAlbumName(e.target.value)}
          value={albumName}
          required
        />
        <button 
        className={InputBoxStyles.item2}
        onClick={handleSubmit}
        >Create</button>
      </div>
    </div>
  );
}

export default InputBox