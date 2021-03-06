import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Inicio from './paginas/Inicio';
import VerCliente from './paginas/VerCliente';
import NuevoCliente from './paginas/NuevoCliente';
import EditarCliente from './paginas/EditarCliente';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
          <Route path=":id" element={<VerCliente />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App
