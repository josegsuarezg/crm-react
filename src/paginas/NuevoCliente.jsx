import { useState, useEffect } from 'react';
import Formulario from '../components/Formulario';

const NuevoCliente = () => {
  return (
    <>
      <h1 className='font-black text-3xl text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-4 mb-4'>Llena los siguientes campos para registrar un nuevo cliente</p>
      
      <Formulario/>
    </>
  );
};

export default NuevoCliente;
