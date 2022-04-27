const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export function API({ url, method, body, headers = {} }) {
  return {
    url,
    method,
    body: JSON.stringify(body),
    headers: { ...defaultHeaders, ...headers }
  };
}

export async function doAPICall({ url, method, body, headers }) {
  try {
    const result = await fetch(url, {
      method,
      body,
      headers
    });
    if (result.ok) {
      const jsonResult = await result.json();

      return jsonResult;
    } else {
      const jsonError = await result.json();
      throw new Error(jsonError.error);
    }
  } catch (error) {
    throw new Error(error);
  }
}
