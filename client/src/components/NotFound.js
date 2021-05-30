import Navbar from './Navbar.js';
import '../assets/NotFound.css'
const NotFound = (props) => {
    const handleGoBack = () => {
        props.history.push('/');
    }
    
    return ( 
        <>
            <Navbar />
            <div className="not-found">
                <div className="head">oops </div>
                <h1><i className="fas fa-frown"></i></h1>
                <h1>404 : PAGE NOT FOUND</h1><h2>The page you are looking for might have been removed, had its name changes or is temporarily unavailable.</h2>
                <div className="go-back" onClick={handleGoBack} style={{cursor:"pointer"}}>GO TO HOMEPAGE</div>
            </div>
        </>
     );
}
 
export default NotFound;