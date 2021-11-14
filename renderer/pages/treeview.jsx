import React from "react";
import Typography from "@material-ui/core/Typography";
import fs from "fs";
import path from "path";
import MyTreeView from "../components/TreeView";

let id = 0;

function Treeview() {
  const [open, setOpen] = React.useState(false);
  const [treeList, setTreeList] = React.useState([]);

  const createFileItem = (name, child = []) => {
    id += 1;
    return {
      name: name,
      child: child,
      id: id,
    };
  };
  const getChildDirectories = (folderPath) => {
    let names = fs.readdirSync(folderPath);
    let children = [];
    names.map((name) => {
      let fullpath = path.join(folderPath, name);
      let stat = fs.statSync(fullpath);
      if (stat.isFile()) {
        children.push(createFileItem(name));
      } else {
        let child = getChildDirectories(fullpath);
        id += 1;
        children.push({
          name: name,
          child: child,
          id: id,
        });
      }
    });
    return children;
  };

  const handleFileInput = (e) => {
    let folderPath = e.target.files[0].path.split("/").slice(0, -1).join("/");
    setTreeList(getChildDirectories(folderPath));

    setOpen(true);
  };

  return (
    <>
      <input type="file" webkitdirectory="true" onChange={handleFileInput} />
      <Typography>TreeView</Typography>
      {open && <MyTreeView treeList={treeList} />}
    </>
  );
}

export default Treeview;
