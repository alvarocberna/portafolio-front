'use client';

import {ApiFetch} from '../../../shared/api/client';
import { useState } from 'react';

export default function SendEmailForm() {
  const [status, setStatus] = useState('Enviar');
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('#2b7fcf');

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      ApiFetch('POST', 'api/email/send-email', titulo, mensaje)
      setColor('#00a63e')
      setStatus('Enviado');
      setTimeout(() => {
        setColor('#2b7fcf')
        setStatus('Enviar');
        setTitulo('');
        setMensaje('');
      }, 3000)
    }catch(error){
      console.log(error)
      setColor('#ff3131');
      setStatus('Error');
      setTimeout(() => {
        setColor('#2b7fcf')
        setStatus('Enviar');
        setTitulo('');
        setMensaje('');
      }, 3000)
    }
  };

  return (
    <div className='w-100'>
      <form className='d-flex flex-column mb-3' id='emailForm' onSubmit={handleSend} method='POST'>
        <label className='w-100'>Asunto</label>
        <input className='w-100 mb-2 rounded' id='Titulo' type='text' value={titulo} 
        onChange={(e) => { setTitulo(e.target.value) }} style={{border: '1px solid #b3b3b3'}} />
        <label className='w-100'>Mensaje</label>
        <input className='w-100 mb-4 rounded' style={{ height: '100px', border: '1px solid #b3b3b3'}}
          id='Mensaje' type='text' value={mensaje} onChange={(e) => { setMensaje(e.target.value) }} />
        <button type='submit' className='col-12 col-sm-9 col-md-12 m-auto py-1 text-white rounded'
          style={{ border: 'none', background: `${color}` }}>
            {status}
        </button>
      </form>
    </div>
  )

}