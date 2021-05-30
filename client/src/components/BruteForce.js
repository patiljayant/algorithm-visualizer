import { useState, useContext, useEffect } from 'react';
import '../assets/BruteForce.css';
import DriverFunctions from './DriverFunctions.js';
import SubNavbar from './SubNavbar';
import Editor from "@monaco-editor/react";
import {DataContext} from '../contexts/dataContext.js';

const Bars = ({props}) => {
    const data = useContext(DataContext);
    const url = props.match.params.algo;
    
    const rawData = data.map(e => {
        if(e.name.split(" ").join("") === url)
            return e;
        return undefined;

    });
    var algoData = rawData.filter(e => e !== undefined);

    if(algoData.length === 0){
        algoData = data;
    }
    algoData = algoData[0];
    useEffect(() => {
        setsnippet(algoData.code[0]);
    }, [algoData])
    const [snippet, setsnippet] = useState({
        language:algoData.code[0].language,
        code:algoData.code[0].code
    });
    const languages = algoData.code.map((e) => {
        if(snippet.language===e.language){
            return(
                <div style={{backgroundColor:" #1e1e1e"}} className="language-name" key={e.language} onClick={()=> {changeCode(e.language);}} >{e.language}
                </div>
            )
        }
        return (
            <div  key={e.language} className="language-name" onClick={()=> {changeCode(e.language);}} >{e.language}</div>
        )
    })

    const changeCode = (language) => {
        const a = algoData.code.filter(r => r.language === language);
        setsnippet(a[0]);
    }
    const df = DriverFunctions(url);
    
    return ( 
        <>
            <SubNavbar df={df} />
            <div className="container">
                <div className="brute-force">
                    <div className="bars">
                        {df.bars}
                    </div>
                    <div className="array-container">
                        <div className="tag" >
                            Array Visualization :
                        </div>
                        {df.elements}
                    </div>
                    
                    
                    <div className="log" >
                        <div className="tag">
                            Activity Log Tracer :
                        </div>
                        {df.log}
                    </div>
                </div>
                <div className="code-info-container">
                
                    <figure style={{color:"white"}}>
                    <h2>{algoData.name}</h2>
                    <p className="code-ino">
                        {algoData.info}
                    </p>
                    <br/>
                    <h4>How to perform {algoData.name}</h4>
                        <pre>
                            <div>
                            {algoData.example}
                            </div>
                        </pre>
                        <br/>
                        <h4>Time Complexity: </h4><p>{algoData.timec}</p>
                        <br/>
                        <h4>Space Complexity: </h4><p>{algoData.spacec}</p>
                        <br/><br/>
                        <pre>
                        
                            <div className="code-language">
                            {languages}
                            </div>
                            <code>
                            <div className="code">
                            <Editor
                              height="90vh"
                              language={snippet.language.toLowerCase()==="c++" ? ("c") : (snippet.language.toLowerCase())}
                              value={snippet.code}
                              theme="vs-dark"
                              options={{
                                  readOnly:true
                              }}
                            />
                            </div>  
                            </code>
                            
                        </pre>
                    </figure>
                </div>
            </div>
                
        </>
            
    );
}
 
export default Bars;