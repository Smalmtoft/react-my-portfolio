import "../items.css";

function Items (props) {

return (

    <div className="portfolio-item"> 
        <img className="portfolio-picture" src={props.portfolioPicture} alt="" />
        <h2 className="portfolio-title">{props.title}</h2>
        <p className="portfolio-text">{props.text}</p>
        <p className="portfolio-tech">{props.tech}</p>
        {/*<a href={props.link} target="_blank">
        <button className="portfolio-button">Go to GitHub repository</button>
        </a>*/}
        <button className="portfolio-button" onClick={props.onClick}>Check out project</button>
    </div>

);
}


export default Items;