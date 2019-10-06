import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {

  const [email, setEmail] = useState(''); // recebe o valor do input vazio ''

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', {
      email: email
    });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');

  }
    return (
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para suas empresas
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-Mail *</label>
            <input
                id="email"
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)} // recebe o evento e seta o valor do e-mail
            />

            <button className="btn">Entrar</button>
            </form>
        </>
    );
}