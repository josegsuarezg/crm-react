import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const VerCliente = () => {
  
  const [cliente, setCliente] = useState({});
  const {id} = useParams();
  
  useEffect(() => {
    
    const obtenerCliente = async () =>{
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado)
      } catch (error) {
        console.log(error);
      }
    }
    obtenerCliente();
  }, []);
  
  const {nombre, email, telefono, empresa, notas} = cliente
  
  return (
    <div className="container bg-white w-full mx-auto my-0 shadow-md rounded-md">
      <h1 className="font-black text-2xl md:text-3xl text-blue-900 text-center pt-10 mb-10">
        Información del Cliente {nombre}
      </h1>

      <div className="pb-10">
        <p className="text-center text-xl md:text-2xl p-2 mb-4 md:text-left md:ml-5 ">
          <span className="uppercase text-gray-600 font-bold">
            Nombre del cliente:{' '}
          </span>
          {nombre}
        </p>
        <p className="text-center md:text-xl p-1 md:text-left md:ml-5 ">
          <span className="uppercase text-gray-500 font-bold">
            E-Mail de Contacto:{' '}
          </span>
          {email}
        </p>
        <p className="text-center md:text-xl p-1 md:text-left md:ml-5 ">
          <span className="uppercase text-gray-500 font-bold">
            Teléfono de contacto:{' '}
          </span>
          {telefono}
        </p>
        <p className="text-center md:text-xl p-1 md:text-left md:ml-5 ">
          <span className="uppercase text-gray-500 font-bold">
            Nombre de la Empresa:{' '}
          </span>
          {empresa}
        </p>
        {notas && (
          <p className="text-center md:text-xl p-1 md:text-left md:ml-5 ">
            <span className="uppercase text-gray-500 font-bold">
              Notas del Cliente:{' '}
            </span>
            {notas}
          </p>
        )}
      </div>
    </div>
  );
};

export default VerCliente;
