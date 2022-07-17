
export const TiposBasicos = () => {

  const nombre: string = 'fernando';
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua']

  return (
    <>
      <h3>TiposBasicos</h3>
      { nombre }, { edad }, { (estaActivo) ? 'Activo' : 'No activo'}
      <br />
      { poderes.join(', ')}
    </>
  )
}
