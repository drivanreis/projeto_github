// arquivo para criar funções que fazem requisições para a API

export const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    const message = await response.json();
    throw new Error(message.message);
  }
  const data = await response.json();
  return data;
};
