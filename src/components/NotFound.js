import React, {useEffect}  from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../Assets/PageNotFound.png";
const NotFound = (props) => {
    useEffect(() => {
    const gotoHome =  setTimeout(()=>{
            props.history.push('/')
        },5000)
        return () => {
            return () => clearTimeout(gotoHome);
 
        };
    }, [])
   

 return( <div>
    <img
      src={PageNotFound}
      style={{
        width: 400,
        height: 400,
        display: "block",
        margin: "auto",
        position: "relative"
      }}
    />
    <center>
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
)
    };
export default NotFound;
