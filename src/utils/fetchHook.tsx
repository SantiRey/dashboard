const baseUrl = 'http://192.168.12.51:8080/';

export const useFetch = () => {
  const f = (method: string) => 
              (body: never, url: string) =>
                fetch(baseUrl + url, {
                  method,
                  body: body && JSON.stringify(body),
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    //'bearer': ''
                  },
            });
  return {
    get: f('GET'),
    post: f('POST'),
  }
}
