import React from 'react'
import InputBoxStyles from './InputBox.module.css'

const InputBox = () => {
  return (
    <div className={InputBoxStyles.container}>
      <h3 className={InputBoxStyles.heading}>Create a new album</h3>
      <div className={InputBoxStyles.container1}>
        <input
          placeholder="enter album name"
          className={InputBoxStyles.item1}
        />
        <button className={InputBoxStyles.item2}>Create</button>
      </div>
    </div>
  );
}

export default InputBox