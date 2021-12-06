import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Typography from "@material-ui/core/Typography";

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
            tag: "",
            prob: "",
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
          padding: "100px",
          border: "3px dashed #9A0680",
          backgroundColor: "#F9F9F9",
          color: "#bdbdbd",
          cursor: "pointer",
          marginBottom: "20px",
          marginTop: "60px",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Typography variant="h4">
          Drag 'n' drop some files here, or click to select files
        </Typography>
      </div>
      {photoList.length > 0 && (
        <Photos
          photoList={photoList}
          model={model}
          setPhotoList={setPhotoList}
        />
      )}
    </>
  );
}
