const fs = require("fs");

export const generateFileTreeObject = (directoryString) => {
  return fs.readdir(directoryString).then((arrayOfFileNameStrings) => {
    const fileDataPromises = arrayOfFileNameStrings.map((fileNameString) => {
      const fullPath = `${directoryString}/${fileNameString}`;
      return fs.statAsync(fullPath).then((fileData) => {
        const file = {};
        file.filePath = fullPath;
        file.isFileBoolean = fileData.isFile();
        /*Here is where we'll do our recursive call*/
        if (!file.isFileBoolean) {
          return generateFileTreeObject(file.filePath)
            .then((fileNamesSubArray) => {
              file.files = fileNamesSubArray;
            })
            .catch(console.error);
        }
        /*End recursive condition*/
        return file;
      });
    });
    return Promise.all(fileDataPromises);
  });
};

export const createDirectoryItem = (name, fullpath, children = []) => {
  return {
    name: name,
    fullpath: fullpath,
    children: children,
  };
};
export const getChildDirectories = (folderPath) => {
  let names = fs.readdirSync(folderPath);
  let children = [];
  names.map((name) => {
    let fullpath = path.join(folderPath, name);
    let stat = fs.statSync(fullpath);
    if (stat.isDirectory()) {
      children.push(createDirectoryItem(name, fullpath));
    }
  });
  return children;
};
