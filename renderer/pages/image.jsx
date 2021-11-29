import React, { useState, useEffect } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import Typography from "@material-ui/core/Typography";
import fs from "fs";
import path from "path";
import MyDropzone from "../components/Photos/DropZone";
let id = 0;

function Image() {
  const [photoList, setPhotoList] = useState([]);
  const [previewURL, setPreviewURL] = useState("");
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const createFileItem = (fullpath, name) => {
    id += 1;
    return {
      src: fullpath,
      title: name,
      id: id,
    };
  };

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

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

  const uploadImage = (e) => {
    console.log(e);
  };

  return (
    <>
      {isModelLoading ? (
        <Typography variant="h1">Model Loading...</Typography>
      ) : (
        <MyDropzone model={model} />
      )}
    </>
  );
}

export default Image;
