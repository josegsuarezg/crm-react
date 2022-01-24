import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../components/Formulario';

const EditarCliente = () => {
  
    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true);
    const { id } = useParams();

    useEffect(() => {
      const obtenerCliente = async () => {
        try {
          const url = `http://localhost:4000/clientes/${id}`;
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setCliente(resultado);
        } catch (error) {
          console.log(error);
        }
        setCargando(!cargando);
      };
      obtenerCliente();
    }, []);

    const { nombre, email, telefono, empresa, notas } = cliente;
  
  return (
    <>
      <h1 className="font-black text-3xl text-blue-900">
        {cliente.id ? 'Editar Cliente' : 'Cliente No Existe'}
      </h1>
      <p className="mt-4 mb-4">
        {cliente.id
          ? 'Utiliza este Formulario para editar datos del cliente'
          : ''}
      </p>

      {cliente.id ? <Formulario cliente={cliente} cargando={cargando} /> : ''}
    </>
  );
};

export default EditarCliente;
