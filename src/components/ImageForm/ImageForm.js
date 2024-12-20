import React, { useEffect, useState } from "react";
import styles from "./ImageForm.module.css";
import { db } from "../../firebaseInit";
import { updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const ImageForm = ({ list, openAlbum, updateImg }) => {
  const [imageDetail, setImageDetail] = useState({
    title: "",
    url: "",
  });

  //function to fill up the details of the image for updating, on which the user clicks.
  useEffect(() => {
    if (updateImg.state) {
      setImageDetail({ title: updateImg.title, url: updateImg.url });
    }
  }, [updateImg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // conditionally updating or adding a new image to database
    if (updateImg.state) {
      const newList = list.map((obj, idx) => {
        if (idx === updateImg.idx) return imageDetail;
        else return obj;
      });
      await updateDoc(doc(db, "albums", openAlbum.albumId), {
        photoList: newList,
      });
      toast.success("Image updated successfully");
    } else {
      await updateDoc(doc(db, "albums", openAlbum.albumId), {
        photoList: [imageDetail, ...list],
      });
      setImageDetail({ title: "", url: "" });
      toast.success("Image added successfully");
    }
  };

  //function to get values of image name, url fields in image form
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setImageDetail((pv) => {
      return {
        ...pv,
        [name]: value,
      };
    });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        {updateImg.state ? "Update Image" : "Add new image"}
      </h3>
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
        <div className={styles.btn_container}>
          <button className={styles.btn}>
            {updateImg.state ? "Update" : "Add"}
          </button>
          <button
            className={styles.btn}
            onClick={() => setImageDetail({ title: "", url: "" })}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageForm;
