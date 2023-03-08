import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
       <ul>
          <li>
         <Link to="/home">Home</Link>
       </li>
          <li>
            <Link to="/header">Header</Link>
          </li>
           {/* <li>
            <Link to="/contact">Contact</Link>
       </li> */}
         </ul>
       </nav>

      
     </>
  )
};

export default Layout;