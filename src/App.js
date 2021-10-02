import logo from "./logo.svg";
import "./App.css";
import MUI from "./components/MUI";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<MUI />
				<img src={logo} className='App-logo' alt='logo' />
			</header>
		</div>
	);
}

export default App;
