import { useEffect, useReducer } from "react"

interface AuthState {
  validando: boolean,
  token: string | null,
  username: string,
  nombre: string
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: ''
}

type LoginPayload = {
  username: string;
  nombre: string;
}

// Tengo dos tipos de acciones definidas. login y logout
type AuthAction = 
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload };

const authReducer = ( state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
        username: ''
      }
    
    case 'login':
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: 'ABC123',
        nombre: nombre,
        username: username
      }
  
    default:
      return state;
  }
}

export const Login = () => {

  const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1500);
  }, [])

  const login = () => {
    dispatch({ 
      type: 'login',
      payload: {
        username: 'ruizo',
        nombre: 'Agustin'
      }
    })
  }

  const logout = () => {
    dispatch({type: 'logout'})
  }
  
  if ( validando ){
    return (
      <>
        <h1>Login</h1>

        <div className="alert alert-info">
          Validando...
        </div>
      </>
    )
  }

  return (
    <>
      <h1>Login</h1>

      {
        (token)
          ? <div className="alert alert-success">Autenticado como: { nombre }</div>
          : <div className="alert alert-danger">No autenticado</div>
      }      

      {
        ( token )
          ? (
            <button
              className="btn btn-danger"
              onClick={logout}
            >
              Logout
            </button>
          )
          : (
            <button
              className="btn btn-primary"
              onClick={login}
            >
              Login
            </button>
          )
      }
      
    </>
  )
}
