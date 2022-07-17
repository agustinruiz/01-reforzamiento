import { useForm } from '../hooks/useForm';

export const Formularios = () => {
  const {formulario, email, password, onChange} = useForm({
    email: 'test@test.com',
    password: '123456'
  });

  return (
    <>
      <h3>Formularios</h3>
      <input 
        className="form-control"
        type="text" 
        placeholder="Email"
        value={email}
        onChange={({target}) => onChange( target.value, 'email')}
        />
      <input 
        className="form-control mt-2 mb-2"
        type="text" 
        placeholder="Password"
        value={password}
        onChange={({target}) => onChange( target.value, 'password')}
      />

      <code>
        <pre>{ JSON.stringify(formulario, null, 2) }</pre>
      </code>
    </>
  )
}