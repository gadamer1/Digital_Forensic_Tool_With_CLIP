import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PhotoItem from "./PhotoItem";
const Index = ({ photoList, model, setPhotoList }) => {
  const [categories, setCategories] = useState(["total"]);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [tag, setTag] = useState("total");

  useEffect(() => {
    if (tag === "total") {
      setCurrentPhotos(photoList);
    }
  }, [photoList, tag, currentPhotos]);

  const handleTabChange = (event, newValue) => {
    setTag(newValue);
    if (newValue === "total") {
      setCurrentPhotos(photoList);
    } else {
      setCurrentPhotos(
        photoList.filter((photo) => {
          let flag = false;
          if (photo.tag === newValue) {
            flag = true;
          }
          return flag;
        })
      );
    }
  };
  return (
    <>
      <Tabs
        value={tag}
        onChange={handleTabChange}
        textColor="secondary"
        variant="scrollable"
        indicatorColor="secondary"
      >
        {categories.length > 0 &&
          categories.map((category, idx) => {
            return <Tab key={idx} value={category} label={category} />;
          })}
      </Tabs>

      <ImageList variant="masonry" cols={3} gap={8}>
        {currentPhotos.length > 0 &&
          currentPhotos.map((item) => (
            <PhotoItem
              model={model}
              item={item}
              setCategories={setCategories}
              setPhotoList={setPhotoList}
            />
          ))}
      </ImageList>
    </>
  );
};

export default Index;
