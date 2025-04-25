import Items from "./Components/Items.jsx";
import genesisImage from "./assets/genesis.jpg";
import responsiveImage from "./assets/responsive-design.jpg";
import gameImage from "./assets/typing-game.jpg";

function App() {

  return (

    <>
      <Items 
        portfolioPicture={genesisImage} 
        title="Genesis"
        text="A multi-page portfolio built with HTML and SCSS. It was my first time using Sass, which taught me its strengths. I worked from a Figma file and focused on consistent styling. A challenge was learning grid and understanding SCSS."

        tech="HTML - SCSS"
        link="https://github.com/Smalmtoft/genesis.git"

      />

      <Items 
        portfolioPicture={responsiveImage} 
        title="Responsive"
        text="This project demonstrates responsive design using flexbox. I learned how to use media queries and flexible units. I worked solo and focused on mobile-first principles."
        tech="HTML - CSS"
        link="https://github.com/Smalmtoft/responsive.git"
      />

      <Items 
        portfolioPicture={gameImage}
        title="Typing Game"
        text="A typing game built with HTML, CSS and JavaScript. I created the JavaScript code to the existing design to make it interactive. It was my first time doing this, and despite struggling, I learned a lot through tutorials and course material."
        tech="JavaScript"
        link="https://github.com/Smalmtoft/js-typing-game.git"
      />
    </>

  )

}

export default App
