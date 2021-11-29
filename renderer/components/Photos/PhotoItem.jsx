import React, { useEffect, useRef, useState } from "react";

import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const PhotoItem = ({ item, model, setCategories, setPhotoList }) => {
  const imgRef = useRef(null);
  useEffect(() => {
    if (!item.tag)
      imgRef.current.onload = () => {
        model.classify(imgRef.current).then((results) => {
          if (results.length > 0) {
            setPhotoList((prevState) =>
              prevState.map((photo) =>
                photo.src === item.src
                  ? {
                      ...photo,
                      tag: results[0].className.split(",")[0],
                      prob: (results[0].probability * 100).toFixed(2) + "%",
                    }
                  : photo
              )
            );
            setCategories((prevState) => {
              return Array.from(
                new Set(
                  [].concat(prevState, results[0].className.split(",")[0])
                )
              );
            });
          }
        });
      };
  }, []);

  return (
    <ImageListItem key={item.id}>
      <img
        src={`${item.src}`}
        srcSet={`${item.src}`}
        alt={item.title}
        ref={imgRef}
        loading="lazy"
      />
      {
        <ImageListItemBar
          title={<span> 카테고리 : {item.tag} </span>}
          subtitle={<span>확률: {item.prob}</span>}
          position="below"
        />
      }
    </ImageListItem>
  );
};

export default PhotoItem;
