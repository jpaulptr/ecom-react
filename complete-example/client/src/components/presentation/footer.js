import React from 'react'
import { Link } from 'react-router-dom';

 const Footer = () => (
     <footer>
         <ul>
             <li><Link to={'/about/'}>About</Link></li>
             <li><Link to={'/contact/'}>Contact</Link></li>
         </ul>
     </footer>
)

export default Footer;
