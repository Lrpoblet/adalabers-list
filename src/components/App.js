import { useState } from 'react';
import adalabersData from '../data/adalabers.json';

function App() {
  const [adalabers, setAdalabers] = useState(adalabersData);
  const [newAdalaber, setNewAdalaber] = useState({
    id: '',
    name: '',
    counselor: '',
    speciality: '',
  });

  const handleInput = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      [ev.target.name]: ev.target.value,
      id: crypto.randomUUID(),
    });
  };

  const handleAddClick = (ev) => {
    ev.preventDefault();
    setAdalabers([...adalabers, newAdalaber]);
    setNewAdalaber({
      id: '',
      name: '',
      counselor: '',
      speciality: '',
    });
  };

  const renderAdalabers = () => {
    return adalabers
      .sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
      .map((adalaber) => {
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
      <form>
        <label htmlFor="nameFilter">Nombre</label>
        <input type="text" id="nameFilter" name="nameFilter" />
      </form>
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
        <input
          type="text"
          id="name"
          name="name"
          value={newAdalaber.name}
          onChange={handleInput}
        />
        <label htmlFor="counselor">Tutora: </label>
        <input
          type="text"
          id="counselor"
          name="counselor"
          value={newAdalaber.counselor}
          onChange={handleInput}
        />
        <label htmlFor="speciality">Especialidad: </label>
        <input
          type="text"
          id="speciality"
          name="speciality"
          value={newAdalaber.speciality}
          onChange={handleInput}
        />
        <input
          type="button"
          value="Añadir una nueva Adalaber"
          onClick={handleAddClick}
        />
      </form>
    </div>
  );
}

export default App;
