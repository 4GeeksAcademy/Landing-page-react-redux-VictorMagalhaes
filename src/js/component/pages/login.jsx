import React, {useState} from "react";
import { useNavigate } from "react-router-dom/dist";
import Navbar from "../navbar.jsx";
import Footer from "../footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { changeH1 } from "../actions.js";

const Login = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [initialItem, setInitialItem] = useState ("")

    const handleInputChange = (e) => {
        setInitialItem(e.target.value)
    };

    return (

        <><Navbar logo={state.item} home="Home" about="About Us" Login="Login" contact="Contact"/>
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
        <div className="cotainer bg-gray">
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com" />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter')
                                navigate("/");
                        } } />
                </div>
            </div>
        </div>
        <Footer copyright="Copyright @ Victor Magalhães 2023"/>
        </>
        
    )
}

export default Login;