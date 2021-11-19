import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Tooltip } from '../../components/Tooltip/index'

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  // const [page] = useState(1);
  // const [canceled, setCanceled] = useState();
  // const [page, setPage] = useState(1);
  // const [page, setPage] = useState(1);


  const history = useHistory();

  const Name = localStorage.getItem('name');
  const token = localStorage.getItem('token')

  const limit = 10
  const page = 1 

  useEffect(() => {
    api.get(`/load?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: token,
      }
    }).then(response => {
      console.log(response)
      setIncidents(response.data.rows);
    })
  }, [token]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/cancel`, {
        headers: {
          Authorization: token,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero"/>
        <span>Bem vindo (a), {Name}</span>

        {/* <Link className="button" to="/incidents/new">Cadastrar novo caso</Link> */}
        <Link className="button" to="/colect">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Coletas solicitadas</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <div className="container" >
              <div className="profile" >
                <div className="profile-content" >
                  <strong>Material:</strong>
                  <p>{incident.material}</p>
                </div>

                <div className="profile-content" >
                  <strong>Descrição:</strong>
                  <p>{incident.description}</p>
                </div>
              </div>
              <div className="profile" >
                <div className="profile-content" >
                  <strong>Avenida:</strong>
                  <Tooltip message={incident.avenue} >
                    <p style={{ display:'flex', width:'141px'}} >
                      {incident.avenue.length>10?incident.avenue.slice(0,12).concat('...'):incident.avenue} {incident.number}
                    </p>
                  </Tooltip>
                </div>

                <div className="profile-content" >
                  <strong>Bairro:</strong>
                  <p>{incident.district}</p>
                </div>
              </div>
              <div className="profile" >
                <div className="profile-content" >
                  <strong>CEP:</strong>
                  <p>{incident.postal_code}</p>
                </div>
                <div className="profile-content" >
                  <strong>Cidade:</strong>
                  <p>{incident.city}</p>
                </div>

                <div className="profile-content" >
                  <strong>Estado:</strong>
                  <p>{incident.state}</p>
                </div>
              </div>
            </div>
            
        
            {/* <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p> */}
        
            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}