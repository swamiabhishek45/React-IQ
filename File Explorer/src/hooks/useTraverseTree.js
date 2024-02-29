const useTraverseTree = () => {

    function insertNode(tree, folderID, item, isFolder) {
        if(tree.id === folderID && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            })
            return tree;
        }
        let latestNode =[]
        latestNode = tree.items.map((obj) => {
            return insertNode(obj, folderID, item, isFolder)
        })
        return {...tree, items: latestNode};
    }

    const updateNode = () => {};
    const deleteNode = () => {};

    return { insertNode }
}

export default useTraverseTree;