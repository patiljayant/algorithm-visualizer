import SelectionSort from './SelectionSort';
import BubbleSort from './BubbleSort.js';
import InsertionSort from './InsertionSort.js';
import HeapSort from './HeapSort.js';
import QuickSort from './QuickSort.js';
import ShellSort from './ShellSort.js';

const GetData = (algo) => {
    var arr=[];
    var url = true;

    switch(algo) {
        case "SelectionSort":
            arr = SelectionSort().arr;
            break;

        case "BubbleSort":
            arr = BubbleSort().arr;
            break;

        case "InsertionSort":
            arr = InsertionSort().arr;
            break;

        case "QuickSort":
            arr = QuickSort().arr;
            break;

        case "HeapSort":
            arr = HeapSort().arr;
            break;

        case "ShellSort":
            arr = ShellSort().arr;
            break;

        default:
            arr = [];
            url = false;
      }
      return {arr, url};
}
 
export default GetData;