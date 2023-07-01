// rutUtils.js

export function validarRut(rut) {
    if (typeof rut !== 'string') {
      return false;
    }
  
    // Eliminar puntos y guión verificador del RUT
    rut = rut.replace(/\./g, '').replace(/-/g, '');
  
    // Validar que el RUT tenga el formato correcto
    if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
      return false;
    }
  
    // Extraer el dígito verificador
    const dv = rut.slice(-1).toUpperCase();
  
    // Extraer el número del RUT sin el dígito verificador
    const rutSinDv = rut.slice(0, -1).replace(/\./g, '');
  
    // Calcular el dígito verificador esperado usando el algoritmo del módulo 11
    let suma = 0;
    let multiplicador = 2;
  
    for (let i = rutSinDv.length - 1; i >= 0; i--) {
      suma += parseInt(rutSinDv.charAt(i)) * multiplicador;
      multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
    }
  
    const dvEsperado = 11 - (suma % 11) === 10 ? 'K' : (11 - (suma % 11)).toString();
  
    // Comparar el dígito verificador esperado con el ingresado
    return dv === dvEsperado;
  }
  