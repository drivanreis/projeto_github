import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { GithubUser } from './types/github';
import { fetchData } from './services/api';
import { GlobalState } from './types/global-state';
import Home from './pages/home';
import DataPage from './pages/data-page';

function App() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<GithubUser | null>(null);

  const getData = async (user: string) => {
    setLoading(true);
    const data = await fetchData(`https://api.github.com/users/${user}`);
    setUserData(data);
    setLoading(false);
  };

  const globalState: GlobalState = {
    userData,
    getData,
    loading,
  };

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
      </header>
      <div className="content">
        {/* Este componente envolve as rotas da sua aplicação */}
        <Routes>
          <Route path="/" element={ <Home globalState={ globalState } /> } />
          <Route path="/about" element={ <h1>Sobre</h1> } />
          {/* /qualquerCoisa/qualquerCoisa */}
          <Route path="/:user/:dataType" element={ <DataPage /> } />
          {/* Se não entrou em nenhuma das rotas acima */}
          {/* Renderize essa rota */}
          <Route path="*" element={ <h1>404</h1> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
