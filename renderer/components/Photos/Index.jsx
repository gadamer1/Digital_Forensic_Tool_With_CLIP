import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import PhotoItem from "./PhotoItem";
const Index = ({ photoList, model }) => {
  const [label, setLabel] = useState("");
  const identify = (img) => async () => {
    try {
      let labels = await model.classify(img);
      setLabel(labels);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      <h1>{label}</h1>

      {photoList &&
        photoList.map((item) => <PhotoItem model={model} item={item} />)}
    </ImageList>
  );
};

export default Index;
