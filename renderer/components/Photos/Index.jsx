import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
const Index = ({ photoList }) => {
  return (
    <ImageList cols={3} rowHeight={300} cols={3}>
      {photoList &&
        photoList.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.src}`}
              srcSet={`${item.src}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
};

export default Index;
