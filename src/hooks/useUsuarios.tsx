import { useState, useRef, useEffect } from 'react';
import { User, ReqResList } from '../interfaces/reqRes.interface';
import { reqResApi } from '../api/reqRes';

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);

  const paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuarios();
  }, []);
  
  const cargarUsuarios = async() => {
    // llamado al API
    const resp = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: paginaRef.current
      }
    });

    if(resp.data.data.length > 0){
      setUsuarios(resp.data.data);
    } else {
      paginaRef.current --;
      alert('No hay mas registros')
    }
  }

  const paginaSiguiente = () => {
    paginaRef.current ++;
    cargarUsuarios()
  }
  
  const paginaAnterior = () => {
    if(paginaRef.current > 1) {
      paginaRef.current --;
      cargarUsuarios();
    }
  }
  
  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior,
  }
}
