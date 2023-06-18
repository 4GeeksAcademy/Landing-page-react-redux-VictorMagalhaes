import React from "react";

const Footer = (props) =>{
    return (
        <footer class="py-3 mt-3 bg-secondary">
        <p class="text-center text-white">{props.copyright}</p>
        </footer>
    )
}

export default Footer;