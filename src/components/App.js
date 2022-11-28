import { useState } from 'react';
import { render } from 'react-dom';
import adalabersData from '../data/adalabers.json';

function App() {
  const [adalabers, setAdalabers] = useState(adalabersData);

  const renderAdalabers = () => {
    return adalabers.map((adalaber) => {
      return (
        <tr key={adalaber.id}>
          <td>{adalaber.name}</td>
          <td>{adalaber.counselor}</td>
          <td>{adalaber.speciality}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1>Adalabers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>{renderAdalabers()}</tbody>
      </table>
      <h2>Añadir una Adalaber</h2>
      <form>
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" name="name" />
        <label htmlFor="counselor">Tutora: </label>
        <input type="text" id="counselor" name="counselor" />
        <label htmlFor="speciality">Especialidad: </label>
        <input type="text" id="speciality" name="speciality" />
        <input type="button" value="Añadir una nueva Adalaber" />
      </form>
    </div>
  );
}

export default App;
