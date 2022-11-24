function publicar(mensaje) {
  if(mensaje.length==0){
    return "error-publicacion";
  }
  return mensaje;
}


export default publicar;
