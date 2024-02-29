import { useState } from "react";
import explorer from "./data/folderData";
import "./App.css";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [expData, setExpData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderID, item, isFolder) => {
    const finalTree = insertNode(expData, folderID, item, isFolder);

    setExpData(finalTree);
  };

  return (
    <>
      <Folder handleInsertNode={handleInsertNode} explorer={expData} />
    </>
  );
}

export default App;
