import React from "react";
import "./index.css"

const source_text = `No deberíamos existir. Con esta afirmación no hago mía la perspectiva de esos catastrofistas y pasados de vuelta que circulan por internet y que dicen que la raza humana es lo peor. No, estoy hablando desde el punto de vista físico: nuestra existencia era muy improbable. Pero que nos quiten lo bailao. La teoría del Big Bang, con sus grandes éxitos explicando por qué el Universo es como es, no nos habla de cuál es la razón para que lo que vemos a nuestro alrededor exista. Me explico.`

function App() {
  return (
    <div className="app_container">
			<h1>Hi</h1>
			<SourceText />
    </div>
  );
}

const SourceText = () => {
	return (
		<p onClick={handleClick}>{`${source_text}`}
		</p>
	);	
}

function handleClick(event) {
	const word = event.target.textContent;
	console.log(event)
}

export default App;
