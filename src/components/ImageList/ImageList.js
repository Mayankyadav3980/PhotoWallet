import React from 'react'
import ImageForm from '../ImageForm/ImageForm'

const ImageList = ({setOpenAlbum}) => {
  return (
    <>
      <button onClick={() => setOpenAlbum({ open: false })}>back</button>
      <ImageForm />
    </>
  );
}

export default ImageList