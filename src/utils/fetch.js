export const fetchData = async (url, method, token, body = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const status = response.status;
    console.log('Response Status:', status);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${status}`);
    }

    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    return { status, data };
  } catch (error) {
    console.error('Fetch error:', error);
    return { status: 500, data: error.message };
  }
};