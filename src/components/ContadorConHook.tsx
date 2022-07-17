import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

  const {valor, acumular} = useCounter(10);

  return (
    <>
      <h1>Contador con hook: <small>{valor}</small></h1>

      <button
        className='btn btn-primary'
        onClick={ () => acumular(1) }
        >
        +1
      </button>
      &nbsp;
      <button
        className='btn btn-primary'
        onClick={ () => acumular(-1) }
      >
        -1
      </button>
    </>
  )
}
