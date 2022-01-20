import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import Error from './Error';

const Formulario = () => {
  
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, 'El nombre muy corto')
      .max(20, 'El nombre muy largo')
      .required('El nombre del cliente es obligatorio'),
    empresa: Yup.string().required('El nombre de la empresa es obligatorio'),
    email: Yup.string()
      .email('La dirección de Email no es valida')
      .required('El email es obligatoro'),
    telefono: Yup.number()
      .positive('El Número no es valido')
      .integer('El Número no es valido')
      .typeError('El Número no es valido')
  });
  
  const handleSubmit = (valores) => {
    console.log(valores);
  }
  
  return (
    <div className="bg-white rounded-md mt-10 px-5 py-10 shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold upercase text-xl text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          notas: ''
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => (
          <Form className="mt-10">
            <div className="mb-4">
              <label htmlFor="nombre" className="font-bold text-gray-600">
                Nombre:
              </label>
              <Field
                type="text"
                placeholder="Nombre del Cliente"
                className="mt-2 block w-full p-3 bg-gray-100"
                id="nombre"
                name="nombre"
              />

              {errors.nombre && touched.nombre ? (
                <Error>{errors.nombre}</Error>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="empresa" className="font-bold text-gray-600">
                Empresa:
              </label>
              <Field
                type="text"
                placeholder="Empresa del Cliente"
                className="mt-2 block w-full p-3 bg-gray-100"
                id="empresa"
                name="empresa"
              />

              {errors.empresa && touched.empresa ? (
                <Error>{errors.empresa}</Error>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="font-bold text-gray-600">
                E-mail:
              </label>
              <Field
                type="email"
                placeholder="E-mail del Cliente"
                className="mt-2 block w-full p-3 bg-gray-100"
                id="email"
                name="email"
              />

              {errors.email && touched.email ? (
                <Error>{errors.email}</Error>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="telefono" className="font-bold text-gray-600">
                Teléfono:
              </label>
              <Field
                type="tel"
                placeholder="Teléfono de Contácto"
                className="mt-2 block w-full p-3 bg-gray-100"
                id="telefono"
                name="telefono"
              />
              
              {errors.telefono && touched.telefono ? (
                <Error>{errors.telefono}</Error>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="notas" className="font-bold text-gray-600">
                Notas del Cliente:
              </label>
              <Field
                as="textarea"
                type="text"
                placeholder="Notas del Cliente"
                className="mt-2 block w-full p-3 bg-gray-100 h-40"
                id="notas"
                name="notas"
              />
              
              {errors.notas && touched.notas ? (
                <Error>{errors.notas}</Error>
              ) : null}
            </div>

            <input
              type="submit"
              value="Agregar Cliente"
              className="bg-blue-800 text-white  p-3 mt-10 block mx-auto rounded-md hover:bg-blue-500 cursor-pointer uppercase w-full font-bold md:text-lg"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
