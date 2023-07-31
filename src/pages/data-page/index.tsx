import { useParams, useNavigate, Link } from 'react-router-dom';
import './data-page.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../../services/api';

function DataPage() {
  const [data, setData] = useState([]);
  const { user, dataType } = useParams();
  const navigate = useNavigate();

  // Efeito colateral
  // Causa -> Efeito
  // Componente DataPage ser colocado na tela
  // E todas as vezes que dataType e user forem alterados
  // Executar a função getGithubData
  useEffect(() => {
    console.log('Efeito de requisição  com dataType =', dataType);
    const getGithubData = async () => {
      const baseUrl = `https://api.github.com/users/${user}/${dataType}`;

      // se dataType é repos ou gists ou followers
      if (['repos', 'gists', 'followers'].includes(dataType ?? '')) {
        // fazer a requisição à API
        const response = await fetchData(baseUrl);
        console.log(response);
        setData(response);
      }
    };
    getGithubData();

    return () => {
      console.log('Limpeza do efeito de requisição com dataType = ', dataType);
    };
  }, [user, dataType]); // Mudança do valor de dataType e user

  // Limpeza de um efeito
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.count('Ainda estou aqui');
    }, 1000);

    return () => {
      // Sempre que o componente for sair da tela
      console.log('Componente DataPage vai sair da tela');
      clearInterval(intervalId);
    };
  }, []); // Renderização do componente DataPage

  console.log('Componente DataPage renderizou');

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="data_page_container">
      <h1>
        Dados do usuário
        {' '}
        {user}
      </h1>
      Tipo de dados:
      {' '}
      {dataType}
      {
        (data && dataType === 'repos') && (
          <>
            <h1>Repositórios</h1>
            {
              data.map((repo: any) => (
                <div key={ repo.id }>
                  <h2>{ repo.name }</h2>
                  <p>{ repo.description }</p>
                </div>
              ))
            }
          </>
        )
      }
      <div className="links">
        <Link to={ `/${user}/repos` }>
          Ver repositórios
        </Link>
        <Link to={ `/${user}/gists` }>
          Ver gists
        </Link>
        <Link to={ `/${user}/followers` }>
          Ver seguidores
        </Link>
      </div>
      <button className="back__button" onClick={ handleBack }>
        Voltar
      </button>
    </div>
  );
}

export default DataPage;
