import React, {useState} from "react";

import Navbar from "./navbar.jsx";

import Jumbotron from "./jumbotron.jsx";

import Cards from "./cards.jsx";

import Footer from "./footer.jsx";

import { useSelector, useDispatch } from "react-redux";

import { changeH1 } from "./actions.js";




//create your first component
const Home = () => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state)
	const [initialItem, setInitialItem] = useState ("")

    const handleInputChange = (e) => {
        setInitialItem(e.target.value)
    };
	
	return (
		<div classname="container-fluid">
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
			<Jumbotron title="A Warm Welcome!" buttonURL="Call to Action" textJumbotron="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
				ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
			<Cards imageURL1="https://fastly.picsum.photos/id/866/500/325.jpg?hmac=I2y0xlzTPTbxIJSQe8GFE5NTvMo8ptQL7spuV_eMH6E" imageURL2="https://fastly.picsum.photos/id/600/500/325.jpg?grayscale&hmac=wtQrO_eOBNlNHca_1AonQQx0nfT27PTdntnjU3_vOsk" imageURL3="https://fastly.picsum.photos/id/15/500/325.jpg?hmac=jGdgJIx_dDBemhjBVChLXvOENvbTWgXFi8fJRmH9SeQ" imageURL4="https://fastly.picsum.photos/id/28/500/325.jpg?hmac=nafJI0g3L3VwY4GSn1msdHVpZpLjD-zUXbrUPajtXzA"
			cardsTitle="Card Title" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." buttonCardsURL="Find Out More!"/>
			<Footer copyright="Copyright @ Victor Magalhães 2023"/>
		</div>
	);
};

export default Home;
