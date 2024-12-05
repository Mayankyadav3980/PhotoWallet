import React, {useState} from 'react'
import styles from './ImageForm.module.css'
import { db } from '../../firebaseInit';
import { updateDoc, doc } from 'firebase/firestore';

const ImageForm = ({list, openAlbum}) => {
   const [imageDetail, setImageDetail] = useState({
    title:"",
    url: ""
   });

   const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "albums", openAlbum.albumId),{ photoList: [...list, imageDetail]});
    setImageDetail({ title: "", url: "" });
    
    //  try {
    //    await addDoc(collection(db, "albums"), {
    //      albumName: albumName,
    //      photoList: [],
    //      date: new Date(),
    //    });
    //    setAlbumName("");
    //    //  alert("new album created!!");
    //  } catch (e) {
    //    console.log("error is: " + e);
    //  }
   };

   const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    setImageDetail( pv => {
        return {
            ...pv,
            [name]: value
        }
    })}

   return (
     <div className={styles.container}>
       <h3 className={styles.heading}>Add image to {}</h3>
       <form onSubmit={handleSubmit}>
         <div className={styles.container1}>
           <input
             placeholder="enter name"
             className={styles.input_field}
             onChange={handleChange}
             value={imageDetail.title}
             name="title"
             required
           />
           <input
             placeholder="enter url"
             className={styles.input_field}
             onChange={handleChange}
             value={imageDetail.url}
             name="url"
             required
           />
         </div>
         <button className={styles.btn}>
           Add
         </button>
       </form>
     </div>
   );
  
}

export default ImageForm