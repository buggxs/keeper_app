import React from "react";


const year = new Date().getFullYear();


function Footer() {
    return (<footer><p>&copy; Andre Salzmann {year}</p></footer>);
}

export default Footer;