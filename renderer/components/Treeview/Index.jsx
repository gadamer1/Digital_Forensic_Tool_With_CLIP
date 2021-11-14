import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

const Index = ({ treeList }) => {
  let RecursItem = (data) => {
    console.log(treeList);
    debugger;
    if (!data.child) {
      return (
        <TreeItem key={data.id} nodeId={String(data.id)} label={data.name} />
      );
    }
    return (
      <TreeItem key={data.id} nodeId={String(data.id)} label={data.name}>
        {data.child?.map((v) => {
          return RecursItem(v);
        })}
      </TreeItem>
    );
  };

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      {treeList &&
        treeList.map((v, idx) => {
          return RecursItem(v);
        })}
    </TreeView>
  );
};

export default Index;
