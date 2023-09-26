import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/cities')
      .then((res) => res.text())
      .then((data) => {
        console.log('Dados brutos recebidos:', data); // Verifique os dados brutos recebidos
        const jsonData = JSON.parse(data);
        setCities(jsonData);
      })
      .catch((error) => console.error('Erro ao carregar cidades:', error));
  }, []);
  

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const handleCloseClick = () => {
    setSelectedCity(null);
  };

  return (
    <div className="App">
      <h1>Lista de Cidades</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id} onClick={() => handleCityClick(city)}>
            {city.name}
          </li>
        ))}
      </ul>
      {selectedCity && (
        <div className="city-details">
          <button onClick={handleCloseClick}>Fechar</button>
          <h2>{selectedCity.name}</h2>
          <img src={selectedCity.photo} alt={selectedCity.name} />
          <p>{selectedCity.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
