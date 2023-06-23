import React, {useState} from "react";
import Navbar from "../navbar.jsx";
import Footer from "../footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { changeH1 } from "../actions.js";

const AboutUs = () =>{

    const state = useSelector((state) => state)
    const dispatch = useDispatch()
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
            <div className="text-center">
                <h1>About Us</h1>
            </div>
            <Footer copyright="Copyright @ Victor Magalhães 2023"/>
        </div>
    )
}

export default AboutUs;