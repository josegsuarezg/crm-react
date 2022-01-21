import { useNavigate } from 'react-router-dom';

const Cliente = ({cliente}) => {
  
  const navigate = useNavigate();
  
  const {nombre, email, telefono, empresa, notas, id} = cliente
  
  return (
    <tr className="text-center mb-8 flex flex-col justify-center items-center border-b-4 md:table-row md:h-20">
      <td className="m-0">
        <span className="text-gray-600 uppercase font-bold md:hidden">
          Nombre:{' '}
        </span>
        {nombre}
      </td>
      <td className="m-0">
        <p>
          <span className="text-gray-600 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-600 uppercase font-bold">Teléfono: </span>
          {telefono}
        </p>
      </td>
      <td className="mb-5">
        <span className="text-gray-600 uppercase font-bold md:hidden">
          Empresa:{' '}
        </span>
        {empresa}
      </td>
      <td className="mb-5">
        <button
          type="button"
          className=" bg-yellow-600 hover:bg-yellow-700 text-white font-bold md:block px-2 py-1 rounded-md cursor-pointer w-full mb-1"
          onClick={() => navigate(`/clientes/${id}`)}
        >
          Ver
        </button>
        <button
          type="button"
          className=" bg-blue-600 hover:bg-blue-700 text-white font-bold md:block px-2 py-1 rounded-md cursor-pointer w-full mb-1"
        >
          Editar
        </button>
        <button
          type="button"
          className=" bg-red-600 hover:bg-red-700 text-white font-bold md:block px-2 py-1 rounded-md cursor-pointer w-full mb-1"
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
