import { useState, useRef } from 'react';
import GetData from './GetData';

const DriverFunctions = (algo) => {
    
    const arr = GetData(algo).arr;
    const [list, setList] = useState(arr[0].list);  
    const [color, setColor] = useState(arr[0].color);
    const [message, setmessage] = useState([]);
    const current = useRef(0);
    const [progres, setprogres] = useState(new Array(arr.length).fill("#98FB98"));
    const stop = useRef(false);
    const speed = useRef(550);
    const [speedstate, setspeedstate] = useState(550);
    const [playState, setplayState] = useState(true);
    const bars = list.map((bar, i) => {
        return(
            <div className="bar" style={{height:bar*4, backgroundColor:color[i]}} key={i}>
            <span>{bar}</span>
            </div>
        )
    });

    const timeline = arr.map((ele, i) => {
                        return(
                            <div key={i} style={{backgroundColor:progres[i], width:150/arr.length, height:25}} onClick = {()=>{managePosition(i);}}>
                                
                            </div>
                        )
                    });

    const elements = list.map((bar,i) => {
        return(
            <div className="array-div" key={i}>
                <div className="array-index">
                    {i}
                </div>
                <div style={{backgroundColor:color[i]}} className="array-elements">
                    {bar}
                </div>
            </div>
        )
    });

    const log = message.map((a,i) => {
        return(
            <h4 key={i}>
                {a}
            </h4>
        )
    });

    const controlButton = playState ? (
        <button onClick={()=> {
            start(current.current);
        }}
        className="control-button"
        ><i className="fa fa-play"></i> &nbsp;Play</button>
    ) : (
        <button onClick={()=> {
            pause();
        }}
        className="control-button"
        ><i className="fa fa-pause"></i>&nbsp;Pause</button>
    );
    
    const dummy = new Array(20);
    let counter = 1100;
    for(let j =0;j<20;j++){
        dummy[j]=(counter-50);
        counter-=50;
    }
    const speedLine = dummy.map((e,i) => {
        if(e!==speed.current)
            return(
                <div key={i} className="speed-elements" onClick = {()=>{setSpeed(e);}}>
                    
                </div>
            )
        
        return(
            <div key={i} className="speed-pointer"  onClick = {()=>{setSpeed(e);}}>
                
            </div>
        )
    })

    const set = (index) => {
        const p=[];
        for(let j=0;j<=index;j++){
            if(arr[j].msg.length >0){
                p.push(arr[j].msg);
            }
        }
        const q = progres.map((ele,j) => {
            if(j<=index)
                return "#50C878";

            return "#98FB98";    
        });
        setList(arr[index].list);
        setColor(arr[index].color);
        setmessage(p);
        setprogres(q);
    }
    
    const setSpeed = (i) => {
        speed.current = i;
        setspeedstate(speed.current);
    }

    const managePosition = (position) => {
        pause();
        set(position);
        current.current = position;
    }

    const pause = () => {
        stop.current = true;
        setplayState(true);
    }

    const start= (i,count = arr.length) => {
        let index = i;
        stop.current = false;
        setplayState(false);
        const swap = () => {
            if(stop.current === false && index <= i+count){
                set(index);
                index++;
                if(index < arr.length) {
                    setTimeout(swap ,speed.current)
                }
                
                if(index===arr.length){
                    setplayState(true);                    
                    current.current = 0;
                }

                else
                    current.current = index;
            }
        }
        setTimeout(swap ,speed.current);
    }

    const move = (index,i) => {
        if(index + i <arr.length && index + i>=0){
            index = index + i;
            set(index);

            if((current.current + i < arr.length) && (current.current + i >=0))
                current.current += i;

            else
                current.current = 0;    
        }
    }
    
    return {
        arr,
        list,
        color,
        message,
        current,
        progres,
        stop,
        bars,
        timeline,
        elements,
        log,
        set,
        managePosition,
        pause,
        start,
        move,
        controlButton,
        speedLine
    }
}
 
export default DriverFunctions;