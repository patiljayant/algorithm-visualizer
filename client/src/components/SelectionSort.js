import Add from './Add.js';

const SelectionSort = () => {

    const arr = [];
    let c = new Array(10).fill("black");
    let l = [10,7,50,15,12,23,45,32,18,5];
    arr.push(Add(c,l,[]));
    let n= l.length;
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        c[i] = "#ffc000";
        arr.push(Add(c,l,[]));
        let min = i;
        for(let j = i+1; j < n; j++){
            c[j] = "#ffc000";
            arr.push(Add(c,l,[]));
            if(l[j] < l[min]) {
                if(min!==i)
                    c[min]="black";
                min=j;
                c[j] = "blue";
            }
            if(c[j]!== "blue")
                c[j]="black";
            else
                arr.push(Add(c,l,[]));
        }
        if (min !== i) {
            // Swapping the elements
            let tmp = l[i]; 
            l[i] = l[min];
            l[min] = tmp;    
            c[min]="black";
            let msg = "Swap "+l[min]+" and "+l[i]+".";
            arr.push(Add(c,l,[msg]));
        }
        c[i]="black";
    }
    arr.push(Add(c,l,[]));

    return {arr}       

}
 
export default SelectionSort;