import { BsTwitter } from 'react-icons/bs';
import { IoBusiness } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import { GithubUser } from '../../types/github';
import './user-details.css';

type UserDetailsProps = {
  userData: GithubUser | null;
};

function UserDetails({ userData }: UserDetailsProps) {
  const notFoundMsg = 'Não Encontrado';
  return (
    <div className="user__details__container">

      { (userData) && (
        <>
          <div className="left">
            <img src={ userData.avatar_url } alt={ userData.name } />
          </div>
          <div className="right">
            <h2>{ userData.name }</h2>
            <p>{`@${userData.login}`}</p>
            <div className="social">
              <p>
                <BsTwitter />
                {notFoundMsg}
              </p>

              <p>
                <IoBusiness />
                {`${userData.company}` || notFoundMsg}
              </p>
              <p>
                <FaMapMarkerAlt />
                { userData.location || notFoundMsg}
              </p>
              <p>
                <FaLink />
                {' '}
                { userData.blog || notFoundMsg}
              </p>
            </div>
            <div className="details">
              <Link
                to={ `/${userData.login}/repos` }
                className="box"
              >
                <p>Repositórios</p>
                <span>{ userData.public_repos }</span>
              </Link>
              <Link
                to={ `/${userData.login}/gists` }
                className="box"
              >
                <p>Gists</p>
                <span>{ userData.public_gists }</span>
              </Link>
              <Link
                to={ `/${userData.login}/followers` }
                className="box"
              >
                <p>Seguidores</p>
                <span>{ userData.followers }</span>
              </Link>
            </div>
          </div>
        </>
      ) }
    </div>
  );
}

export default UserDetails;
