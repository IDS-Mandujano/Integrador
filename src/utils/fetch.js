export const fetchData = async (url, method, token, body = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,  // Usar el token directamente sin "Bearer"
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const status = response.status;  // Guarda el código de estado
    console.log('Response Status:', status);

    if (!response.ok) {
      // Lanza un error solo si la respuesta no es `ok`
      throw new Error(`HTTP error! Status: ${status}`);
    }

    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // Maneja el caso donde la respuesta no es JSON
      data = await response.text(); // Lee el cuerpo como texto
    }

    return { status, data }; // Devuelve el código de estado y los datos
  } catch (error) {
    console.error('Fetch error:', error);
    return { status: 500, data: error.message }; // Devuelve un estado de error genérico y el mensaje de error
  }
};