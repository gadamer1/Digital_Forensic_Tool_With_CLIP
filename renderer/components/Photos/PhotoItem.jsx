import React, { useEffect, useRef, useState } from "react";

import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const PhotoItem = ({ item, model }) => {
  const [results, setResults] = useState([]);
  const imgRef = useRef(null);
  useEffect(() => {
    imgRef.current.onload = () => {
      model.classify(imgRef.current).then((results) => setResults(results));
      console.log(results);
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
      {results.length > 0 && (
        <ImageListItemBar
          title={<span> 카테고리 : {results[0].className} </span>}
          subtitle={
            <span>확률: {(results[0].probability * 100).toFixed(2) + "%"}</span>
          }
          position="below"
        />
      )}
    </ImageListItem>
  );
};

export default PhotoItem;
