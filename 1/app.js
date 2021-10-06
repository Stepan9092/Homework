/* task: Implement preorder, postorder and level-order traversal 
which print node key. Each node is defined as:
class Node{
    T Key;
    Node Parent;
    Node FirstChild;
    Node NextSibling;
} */


//preoder(document.body,(node)=>{console.log(node.tagName)})
//preoderRecursion(document.body,(node)=>{console.log(node.tagName)})
//postorder(document.body,(node)=>{console.log(node.tagName)})
//postorderRecursion(document.body,(node)=>{console.log(node.tagName)})



function postorder(node,fun){

    let pointer=node

do{

    while(pointer.firstElementChild!=null){
        pointer=pointer.firstElementChild
    }
        
    fun(pointer)

    if(pointer.nextElementSibling!==null) {
    pointer=pointer.nextElementSibling
    }
    else{

    while(pointer.nextElementSibling==null && pointer!=node){
        pointer=pointer.parentElement
        fun(pointer)
    }
    
    if(pointer==node) break;

    pointer=pointer.nextElementSibling

    }

}while(true)

}




function postorderRecursion(node,fun){

    if(node.firstElementChild!=null){
        postorderRecursion(node.firstElementChild,fun)
        fun(node)
        if(node.nextElementSibling!=null){
            postorderRecursion(node.nextElementSibling,fun)
        }
    }
    else{
            fun(node)
            if(node.nextElementSibling!=null){
                postorderRecursion(node.nextElementSibling,fun)
            }      
    }
}



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







