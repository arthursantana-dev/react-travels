import { React } from "react";

export default function Header() {
	return (
		<header className="app__header">
		<figure className="header__figure">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/World_icon.svg/1200px-World_icon.svg.png" alt="Travels Logo" className='figure__company-logo' />
			<figcaption className='figure__company-name'>minha lista de viagens.</figcaption>
		</figure>
	</header>
	)
}