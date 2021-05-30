import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import '../assets/Home.css';
import Navbar from './Navbar';
import {DataContext} from '../contexts/dataContext.js'

const Home = () => {
    const [search, setsearch] = useState("");
    const data = useContext(DataContext);
    const cards = data.length === 1 ? (
        <div className="go-back">
            NOT FOUND
        </div>
    ) : (
        data.filter(obj => {
            if(search==="")
                return obj;

            else if (obj.name.toLowerCase().includes(search.toLowerCase())  || obj.name.split(" ").join("").toLowerCase().includes(search.toLowerCase()))
                return obj;    
        }).map((e,i) => {
            const algo = e.name.split(" ").join("");
            const imgUrl =  "url('/images/"+algo+".gif')";
            return(
                <Link to={'/brute-force/'+ algo } className="pos-r" key={i}>
                    <div className="card">
                        <div className="image" style={{backgroundImage:imgUrl}}></div>
                        <div>
                            <h2 >{e.name}</h2>
                        </div>
                    </div>
                    <div className="overlay"><h3>Try {e.name}</h3></div>
                    
                </Link>
            )
        })
    )
    return ( 
        <>
            <Navbar />
            <div className="home">
            <div className="sub-head">
                <span className="a">LEARN </span> 
                <span className="b">ALGORITHMS </span>
                <span className="c">WITH</span><br/>
            </div>
            <div className="head">
                ALGO-VIZ
            </div>
            <div>
                <form className="form-inline" >
                    <input className="form-input" type="search" name="search" placeholder="Search"  onChange={(e)=>{
                        setsearch(e.target.value);
                    }} />
                    <button className="form-button" type="search" onClick={(e)=>{e.preventDefault();}}><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="cards-container">
                {cards}
            </div>
    </div> 
        </>
    
    );
}
 
export default Home;