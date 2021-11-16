import React, { useState } from "react";
import Photos from "../components/Photos";
import Typography from "@material-ui/core/Typography";
import fs from "fs";
import path from "path";
import MyDropzone from "../components/Photos/DropZone";
let id = 0;

function Image() {
  const [photoList, setPhotoList] = useState([]);
  const [previewURL, setPreviewURL] = useState("");
  const createFileItem = (fullpath, name) => {
    id += 1;
    return {
      src: fullpath,
      title: name,
      id: id,
    };
  };
  const getAllPhotosInDir = (folderPath, arr) => {
    let names = fs.readdirSync(folderPath);

    names.map((name) => {
      let fullpath = path.join(folderPath, name);
      let stat = fs.statSync(fullpath);

      if (stat.isFile()) {
        let ext = name.substr(name.lastIndexOf(".") + 1);
        if (ext == "jpg" || ext == "jpeg" || ext == "png") {
          arr.push(createFileItem(fullpath, name));
        }
      } else {
        arr = [...arr, getAllPhotosInDir(fullpath, arr)];
      }
    });
    debugger;

    return arr;
  };

  const handleFileInput = (e) => {
    // let folderPath = e.target.files[0].path.split("/").slice(0, -1).join("/");
    // let arr = getAllPhotosInDir(folderPath, []);
    // setPhotoList(arr);
    // console.log(photoList);
    e.preventDefault();

    e.target.files.foreach((file) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        setPhotoList(...photoList, {
          src: reader.result,
          title: "test",
          id: 0,
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileOnChange = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    setPreviewURL(URL.createObjectURL(file));
  };

  return (
    <>
      <Typography variant="h1">Photos</Typography>
      <MyDropzone />
    </>
  );
}

export default Image;
