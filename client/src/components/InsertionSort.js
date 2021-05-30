import Add from './Add.js';

const InsertionSort = () => {

    const arr = [];
    let c = new Array(10).fill("black");
    let l = [10,7,50,15,12,23,45,32,18,5];
    arr.push(Add(c,l,[]));
    let n= l.length;
    for (let i = 1; i < n; i++) {
        c[i]="#ffc000";
        let m = "Insert "+l[i]+".";
        arr.push(Add(c,l,[m]));
        // Choosing the first element in our unsorted subarray
        let current = l[i];
        // The last element of our sorted subarray
        let j = i-1; 
        while ((j > -1) && (current < l[j])) {
            l[j+1] = l[j];
            c[j]="blue";
            arr.push(Add(c,l,[]));
            c[j]="black";
            j--;
        }
        l[j+1] = current;
        
        c[i]="black";
        arr.push(Add(c,l,[]));
    }
    return {arr};
}
 
export default InsertionSort;