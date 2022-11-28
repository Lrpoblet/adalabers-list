import { useState } from 'react';
import adalabersData from '../data/adalabers.json';

function App() {
  const [adalabers, setAdalabers] = useState(adalabersData);

  const renderAdalabers = () => {
    return adalabers.map((adalaber) => {
      return (
        <div key={adalaber.id}>
          <tr>
            <td>{adalaber.name}</td>
            <td>{adalaber.counselor}</td>
            <td>{adalaber.speciality}</td>
          </tr>
        </div>
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
    </div>
  );
}

export default App;
