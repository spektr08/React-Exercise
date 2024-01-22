import { useState } from 'react';
import Card from './components/Card'
import Loader from './components/Loader'
import './App.css';

function App() {
  const [loading, setIsLoading] = useState(false);
  const [houses, setHouses] = useState([]);
  const handleLoad = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://wizard-world-api.herokuapp.com/houses'); 
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setHouses(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">React.js Exercise</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm justify-center flex">
      {(!loading && houses.length === 0)  &&
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLoad}>
          Load houses
        </button>
      }
        {loading && <Loader/>}
        
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      {houses.map((house, index) => (
        <Card card={house}  />
      ))}
      </div>
    </div>
  );
}

export default App;
