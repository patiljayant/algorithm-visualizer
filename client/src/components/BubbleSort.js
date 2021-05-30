import Add from './Add.js';

const BubbleSort = () => {

    const arr = [];
    let c = new Array(10).fill("black");
    let l = [10,7,50,15,12,23,45,32,18,5];
    arr.push(Add(c,l,[]));
    let n= l.length;
    
    for(let i = 0; i < n; i++){
        c[n-i-1] = "#c51162";
        arr.push(Add(c,l,[]));
        // Last i elements are already in place  
        for(let j = 0; j < ( n - i -1 ); j++){
            c[j+1] = "#ffc000";
            arr.push(Add(c,l,[]));  
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if(l[j] > l[j+1]){
                
              // If the condition is true then swap them
                let temp = l[j];
                l[j] = l[j + 1];
                l[j+1] = temp;
                c[j+1]=c[j]="blue";
                let msg = "Swap "+l[j+1]+" and "+l[j]+".";
                arr.push(Add(c,l,[msg]));
            }
            c[j]=c[j+1]="black";
        }
        c[n-i-1] = "black";
      }
    arr.push(Add(c,l,[]));
    return{arr};
}
 
export default BubbleSort;