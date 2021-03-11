import axios from 'axios';

export const PRODUCTS = 'products';

export const getProducts = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/5c811f3b310000c016771d9b?mocky-delay=1.5s`);
  return data;
};
