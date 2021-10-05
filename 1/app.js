// // class Node{
// //     T key;
// //     Node parent;
// //     Node FirstChild;
// //     Node NextSibling
// // }

// // a=new Node

// class Node {
//     constructor(value) {
//         this.val = value;
//         this.leftChild = null;
//         this.rightChild = null;
//     }

// }

// class BinarySearchTree {
//     constructor(rootValue) {
//         this.root = new Node(rootValue);
//     }

//     insert(currentNode, newValue) {
//         if (currentNode === null) {
//             currentNode = new Node(newValue);
//         } else if (newValue < currentNode.val) {
//             currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
//         } else {
//             currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
//         }
//         return currentNode;
//     }

//     insertBST(newValue) {
//         if(this.root==null){
//             this.root=new Node(newValue);
//             return;
//         }
//         this.insert(this.root, newValue);
//     }

//     preOrderPrint(currentNode) {
//         if (currentNode!==null) {
//             console.log(currentNode.val);
//             this.preOrderPrint(currentNode.leftChild);
//             this.preOrderPrint(currentNode.rightChild);
//         }

//     }

// }

// var BST = new BinarySearchTree(6);
// console.log("The root val for BST : ", BST.root.val)
// BST.insertBST(4);
// BST.insertBST(9);
// BST.insertBST(5);
// BST.insertBST(2);
// BST.insertBST(8);
// BST.insertBST(12);
// BST.insertBST(10);
// BST.insertBST(14);

// BST.preOrderPrint(BST.root);


preoderRecursion(document.body,(node)=>{console.log(node.tagName)})
//preoder(document.body,(node)=>{console.log(node.tagName)})


function preoder(node,fun){
    let pointer=node

    do{
        fun(pointer)

        if(pointer.firstElementChild!==null){
            pointer=pointer.firstElementChild
        }
        else if (pointer.nextElementSibling!==null){
            pointer=pointer.nextElementSibling
        }
        else {

            while(pointer.nextElementSibling==null  && pointer!=node  ){
                pointer=pointer.parentElement      
            }
  
            if(pointer==node) break;

            pointer=pointer.nextElementSibling
        }

    }while (true)

}


function preoderRecursion(node,fun){

    fun(node)

    if(node.firstElementChild!==null){

        let pointer=node.firstElementChild
        do{
            preoderRecursion(pointer,fun)
            pointer=pointer.nextElementSibling
        }
        while(pointer!=null)
    }
}


