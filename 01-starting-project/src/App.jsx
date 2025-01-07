import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() { 
	const [userInput, setUserInput] = useState(
		{
			initialInvestment: 15000,
			annualInvestment: 1200,
			expectedReturn: 6,
			duration: 10,
		}
	);

	function handleChange(inputIdentifier, newValue) {
		setUserInput(prevUserInput => {
			if (inputIdentifier == "duration" && parseInt(newValue) <= 0) {
				return {
					...prevUserInput,
					[inputIdentifier]: 0,
				}
			}

			return {
				...prevUserInput,
				[inputIdentifier]: parseFloat(newValue),
			};
		});
	}

	return (
	<>
		<Header />
		<UserInput userInput={userInput} handleChange={handleChange} />
		<Results userInput={userInput} />
	</>
	);
}

export default App
