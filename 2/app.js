/* task: Implement preorder, postorder and level-order traversal 
which print node key. Each node is defined as:
class Node{
    T Key;
    Node Parent;
    Node FirstChild;
    Node NextSibling;
} */


// preoder(document.body,(node)=>{console.log(node.tagName)})
// preoderRecursion(document.body,(node)=>{console.log(node.tagName)})
// postorder(document.body,(node)=>{console.log(node.tagName)})
// postorderRecursion(document.body,(node)=>{console.log(node.tagName)})
// levelOrder(document.body,(node)=>{console.log(node.tagName)})
// levelOrderRecursion((node)=>{console.log(node.tagName)}, document.body )




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

            while(pointer.nextElementSibling==null  && pointer!==node  ){
                pointer=pointer.parentElement      
            }
  
            if(pointer===node) break;

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
        while(pointer!==null)
    }
}




function postorder(node,fun){

    let pointer=node

    do{

        while(pointer.firstElementChild!==null){
        pointer=pointer.firstElementChild
    }
        
    fun(pointer)

    if(pointer.nextElementSibling!==null) {
    pointer=pointer.nextElementSibling
    }
    else{

        while(pointer.nextElementSibling==null && pointer!==node){
        pointer=pointer.parentElement
          fun(pointer)
        }
    
        if(pointer===node) break;
        pointer=pointer.nextElementSibling
    }

    }while(true)
}




function postorderRecursion(node,fun){

    if(node.firstElementChild!==null){
        postorderRecursion(node.firstElementChild,fun)
        fun(node)
        if(node.nextElementSibling!==null){
            postorderRecursion(node.nextElementSibling,fun)
        }
    }
    else{
            fun(node)
            if(node.nextElementSibling!==null){
                postorderRecursion(node.nextElementSibling,fun)
            }      
    }
}




function levelOrder(node, fun){

    let masResult=[]
    masResult[0]=[]
    masResult[0].push(node)
    
    let i=0, j=0

    do{

        masResult[i+1]=[]

        masResult[i].forEach(element => {
            if(element.firstElementChild!==null){
                masResult[i+1].push(element.firstElementChild)
                while(masResult[i+1][j].nextElementSibling!==null){
                    masResult[i+1].push(masResult[i+1][j].nextElementSibling)
                    j++
                }
                j++
            }
        });

        i++
        j=0;
 
    }while(masResult[i].length!==0)

    masResult.pop()

    masResult.forEach(element => {
        element.forEach(element => {
            fun(element)
        });
    });



//     let pointer=node
//     let level=0, maxLevel=0;

//     do{

//         if(maxLevel<level) maxLevel=level

//         if(pointer.firstElementChild!==null){
//             pointer=pointer.firstElementChild
//             level++;
//         }
//         else if (pointer.nextElementSibling!==null){
//             pointer=pointer.nextElementSibling
//         }
//         else {

//             while(pointer.nextElementSibling==null  && pointer!=node  ){
//                 pointer=pointer.parentElement   
//                 level--
//             }
  
//             if(pointer==node) break;

//             pointer=pointer.nextElementSibling
//         }

//     }while (true)


//     for (let i=0; i<maxLevel+1; i++){
//         do{
//             if(level==i)fun(pointer)
    
//             if(pointer.firstElementChild!==null){
//                 pointer=pointer.firstElementChild
//                 level++;
//             }
//             else if (pointer.nextElementSibling!==null){
//                 pointer=pointer.nextElementSibling
//             }
//             else {
    
//                 while(pointer.nextElementSibling==null  && pointer!=node  ){
//                     pointer=pointer.parentElement   
//                     level--
//                 }
      
//                 if(pointer==node) break;
    
//                 pointer=pointer.nextElementSibling
//             }
    
//         }while (true)
//     }

 }




function levelOrderRecursion(fun, ...nodes ){
  
    let childrenNodes =[]

    nodes.forEach(element => {

        fun(element)

        if(element.firstElementChild!==null)
        {
            childrenNodes.push(element.firstElementChild)
            let pointer=element.firstElementChild
            while(pointer.nextElementSibling!==null){
                childrenNodes.push(pointer.nextElementSibling)
                pointer=pointer.nextElementSibling
            }
        } 
    });

    if(childrenNodes.length!=0) levelOrderRecursion(fun, ...childrenNodes )
}


















