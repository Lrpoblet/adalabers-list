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
  const [search, setSearch] = useState('');
  const [searchConselor, setSearchConselor] = useState('');

  const handleInput = (ev) => {
    if (ev.target.value !== 0) {
      setNewAdalaber({
        ...newAdalaber,
        [ev.target.name]: ev.target.value,
        id: crypto.randomUUID(),
      });
    }
  };

  const handleAddClick = (ev) => {
    ev.preventDefault();
    if (
      newAdalaber.name !== '' &&
      newAdalaber.counselor !== '' &&
      newAdalaber.speciality !== ''
    ) {
      const adalabersClone = [...adalabers, newAdalaber];
      setAdalabers(adalabersClone);
      setNewAdalaber({
        id: '',
        name: '',
        counselor: '',
        speciality: '',
      });
      setSearch('');
      searchConselor('');
    }
  };

  const handleSearchName = (ev) => {
    setSearch(ev.target.value);
  };

  const handleSearchConselor = (ev) => {
    setSearchConselor(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
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
      .filter((adalaber) => {
        return adalaber.name.toLowerCase().includes(search.toLowerCase());
      })
      .filter((adalaber) => {
        if (searchConselor === '') {
          return true;
        }
        return adalaber.counselor.toLowerCase() === searchConselor;
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
      <header>
        <h1>Adalabers</h1>
      </header>
      <main>
        <section>
          <form onSubmit={handleSubmit}>
            <select value={searchConselor} onChange={handleSearchConselor}>
              <option value="">Todos</option>
              <option value="dayana">Dayana</option>
              <option value="yanelis">Yanelis</option>
              <option value="iván">Iván</option>
            </select>
            <label htmlFor="nameFilter">Nombre</label>
            <input
              type="text"
              id="nameFilter"
              name="nameFilter"
              value={search}
              onChange={handleSearchName}
            />
          </form>
        </section>
        <section>
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
        </section>
        <section>
          <h2>Añadir una Adalaber</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Nombre:
              <input
                type="text"
                id="name"
                name="name"
                value={newAdalaber.name}
                onChange={handleInput}
                required
              />
            </label>
            <label htmlFor="counselor">
              Tutora:
              <input
                type="text"
                id="counselor"
                name="counselor"
                value={newAdalaber.counselor}
                onChange={handleInput}
                required
              />
            </label>
            <label htmlFor="speciality">
              Especialidad:
              <input
                type="text"
                id="speciality"
                name="speciality"
                value={newAdalaber.speciality}
                onChange={handleInput}
                required
              />
            </label>
            <input
              type="button"
              value="Añadir una nueva Adalaber"
              onClick={handleAddClick}
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
