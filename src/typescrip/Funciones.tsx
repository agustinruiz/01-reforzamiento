
export const Funciones = () => {

  const sumar = ( a: number, b: number): number => {
    return a+b
  }

  return (
    <>
      <h1>Funciones</h1>
      <span>El resultado es: { sumar(3, 2) }</span>
    </>
  )
}
