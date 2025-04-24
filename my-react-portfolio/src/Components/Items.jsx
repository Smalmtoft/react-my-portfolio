import profilePicture from "../assets/sandra.jpg";
import "../items.css";

function Items () {

return (

    <div className="portfolio-item"> 
        <img src={profilePicture} alt="" />
        <h2 className="portfolio-name">Hello</h2>
        <p className="portfolio-text">My name is Sandra</p>
        <button className="portfolio-button">press the button</button>
    </div>

);
}


export default Items;