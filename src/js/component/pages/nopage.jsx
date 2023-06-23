import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { useSelector, useDispatch } from "react-redux";
import { changeH1 } from "../actions.js";
import Navbar from "../navbar.jsx";
import Footer from "../footer.jsx";

const Nopage = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [initialItem, setInitialItem] = useState ("")

    const handleInputChange = (e) => {
        setInitialItem(e.target.value)
    };

    return (
        <div>
            <Navbar logo={state.item} home="Home" about="About Us" Login="Login" contact="Contact"/>
            <input
                type="text"
                className="H1"
                id="newH1"
                value={initialItem}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        dispatch(changeH1(e.target.value))
                        setInitialItem("");                         
                    }
                } } />
            <h1>URL not found!!</h1>
            <button className="home" onClick={() => navigate("/")}>Home</button>
            <Footer copyright="Copyright @ Victor Magalhães 2023"/>
        </div>
        
        
    )
}

export default Nopage;