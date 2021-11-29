import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Photos from "./Index";

export default function MyDropzone({ model }) {
  const [photoList, setPhotoList] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file, idx) => {
      let reader = new FileReader();
      reader.onloadend = (e) => {
        setPhotoList((prevState) => [
          ...prevState,
          {
            src: reader.result,
            title: reader.result,
            id: idx,
          },
        ]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          border: "3px dashed #eeeeee",
          backgroundColor: "#fafafa",
          color: "#bdbdbd",
          cursor: "pointer",
          marginBottom: "20px",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {photoList && <Photos photoList={photoList} model={model} />}
    </>
  );
}
