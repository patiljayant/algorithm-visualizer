import Add from './Add.js'

const QuickSort = () => {

    const partition = (l, low, high) => {

        let pivot = l[high]; 
        var msg = "Pivot index is "+high+" with value "+l[high]+".";
        c[high] = "blue";
        arr.push(Add(c,l,[msg]));
        let i = (low - 1); 

        for (let j = low; j <= high - 1; j++)
        {
            if (l[j] < pivot)
            {
                i++; 
                c[i]=c[j]="#ffc000";
                if(i!==j){
                    let msg = "Swap "+l[i]+" and "+l[j]+".";
                    arr.push(Add(c,l,[msg])); 
                }
                else{
                    arr.push(Add(c,l,[]));
                }               
                let swap = l[i];
                l[i] = l[j];
                l[j] = swap;
                c[i]=c[j]="black";
            }
        }
        
        if(i+1 !== high){
            msg = "Swap "+l[i+1]+" and "+l[high]+" to bring the pivot element to it's exact position."; 
        }
        else{
            msg = "Pivot element is already at it's place."
        }
        c[i+1]=c[high]="#ffc000";
        arr.push(Add(c,l,[msg]));
        let swap = l[i+1];
        l[i+1] = l[high];
        l[high] = swap;
        c[i+1]=c[high]="black";
        arr.push(Add(c,l,[]));
        return (i + 1);
    }

    const quickSort = ( l,  low,  high) =>{
        if (low < high)
        {
            let pi = partition(l, low, high);
    
            quickSort(l, low, pi - 1);
            quickSort(l, pi + 1, high);
        }
    }

    const arr = [];
    let c = new Array(10).fill("black");
    let l = [10,7,50,15,12,23,45,32,18,5];
    arr.push(Add(c,l,[]));
    let n = l.length;
    quickSort(l, 0, n - 1);

    return {arr};
}
 
export default QuickSort;