import Add from "./Add.js";

const ShellSort = () => {
    const arr = [];
    let c = new Array(10).fill("black");
    let l = [10,7,50,15,12,23,45,32,18,5];
    arr.push(Add(c,l,[]));
    let n= l.length,i;
    let msg;
    var increment = n / 2;
    while (increment > 0) {
            msg = "Gap is of size "+increment;
            arr.push(Add(c,l,[msg]));
        for (i = increment; i < n; i++) {
            var j = i;
            var temp = l[i];
            c[i]="#ffc000";
            msg = "Holding index "+i+" with value "+l[i];
            arr.push(Add(c,l,[msg]));
            while (j >= increment && l[j-increment] > temp) {
                c[j-increment]="#ffc000";
                arr.push(Add(c,l,[]));

                l[j] = l[j-increment];
                c[j]="black";
                msg = temp + " < " + l[j-increment] + ". Swap "+temp+" and " + l[j-increment]+".";
                arr.push(Add(c,l,[msg]));
                j = j - increment;
                
            }
            
            l[j] = temp;
            c[j]="black";
            arr.push(Add(c,l,[]));
        }
    
        if (increment === 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
    return {arr};
}
 
export default ShellSort;