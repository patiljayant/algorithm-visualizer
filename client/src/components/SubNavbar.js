const SubNavbar = ({df}) => {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <h1>ALGO-VIZ</h1>
                    <div className="controllers">
                        <div className="play-pause">
                            {df.controlButton}
                        </div>
                        <div className="mid">
                        <button
                            onClick = {()=> {
                               df.pause();
                               df.move(df.current.current,-1);
                            }}
                            className="control-button"
                        >&lt;</button>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <div className="time-line">
                                {df.timeline}
                            </div>
                        </div>
                
                        <button
                            onClick = {()=> {
                            df.pause();
                            df.move(df.current.current,1);
                        }}
                        className="control-button"
                        >&gt;</button>
                        </div>
                        <div className="speed-div" >
                            Speed : &nbsp;
                            <div className="speed">
                            {df.speedLine}
                        </div>
                        </div>
                        
                    </div>
                </div>    
            </nav>        
        </div>
      );
}
 
export default SubNavbar;