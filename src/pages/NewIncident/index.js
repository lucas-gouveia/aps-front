import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [description, setDescription] = useState('');
  const [material, setMaterial] = useState('');
  const [avenue, setAvenue] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal_code, setPostal_code] = useState('');
  const [complement, setComplement] = useState('');

  const history = useHistory();

  const token = localStorage.getItem('token')

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      description,
      material,
      avenue,
      number,
      district,
      city,
      state,
      postal_code,
      complement
    };

    try {
      await api.post('colect', data, {
        headers: {
          Authorization: token,
        }
      })

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Solicitar nova coleta</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Material de coleta"
            value={material}
            onChange={e => setMaterial(e.target.value)}
          />
          <input 
            placeholder="Endereço"
            value={avenue}
            onChange={e => setAvenue(e.target.value)}
          />
          <input 
            placeholder="Número"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <input 
            placeholder="Bairro"
            value={district}
            onChange={e => setDistrict(e.target.value)}
          />
          <input 
            placeholder="CEP"
            value={postal_code}
            onChange={e => setPostal_code(e.target.value)}
          />
          <div className="input-group">
            <input 
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input 
              placeholder="UF"
              style={{ width: 80 }} 
              value={state}
              onChange={e => setState(e.target.value)}
            />
          </div>
          <input 
            placeholder="Complemento"
            value={complement}
            onChange={e => setComplement(e.target.value)}
          />
          <button className="button" type="submit">Solicitar Coleta</button>
        </form>
      </div>
    </div>
  );
}