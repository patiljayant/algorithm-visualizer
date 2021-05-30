import Add from './Add.js';

const HeapSort = () => {
    
    const arr = [];
    let c = new Array(10).fill("black");
    let l = [10,7,50,15,12,23,45,32,18,5];
    arr.push(Add(c,l,[]));
    let n= l.length;

    const heapify = (l, n, i) =>{
        let largest = i; // Initialize largest as root
        let left = 2 * i + 1; // left = 2*i + 1
        let right = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (left < n && l[left] > l[largest])
            largest = left;
 
        // If right child is larger than largest so far
        if (right < n && l[right] > l[largest])
            largest = right;
 
        // If largest is not root
        if (largest !== i) {
            let swap = l[i];
            l[i] = l[largest];
            l[largest] = swap;
            let msg = "Swap "+l[i]+" and "+l[largest]+".";
            c[i]=c[largest]="#ffc000";
            arr.push(Add(c,l,[msg]));
            c[i]=c[largest]="black";
            arr.push(Add(c,l,[]));
            // Recursively heapify the affected sub-tree
            heapify(l, n, largest);
        }
    }
     
    // Build heap (rearrange array)
    let msg = "Creating Max Heap from index 0 to "+(n-1)+".";
    arr.push(Add(c,l,[msg]));
    for (let i = n / 2 - 1; i >= 0; i--){
        heapify(l, n, i);
    }
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        let msg = "Swap the root which is maximum "+l[0]+" with "+l[i]+".";
        c[0]=c[i]="#ffc000";
        arr.push(Add(c,l,[msg]));
        
        let temp = l[0];
        l[0] = l[i];
        l[i] = temp;
        
        c[i]=c[0]="black";
        if(i-1 >0){
            msg = "Creating Max Heap from index 0 to "+(i-1)+".";
            arr.push(Add(c,l,[msg]));
        }
        // call max heapify on the reduced heap
        heapify(l, i, 0);
    }
    arr.push(Add(c,l,[]));
    return {arr};
}
 
export default HeapSort;