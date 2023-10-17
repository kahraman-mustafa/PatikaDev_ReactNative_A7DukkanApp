import axios from 'axios';
import {useState, useEffect} from 'react';

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: productData} = await axios.get(url);
      setData(productData);
      // console.log(productData);
      setLoading(false);
    } catch (error) {
      // console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, data, error};
};

export default useFetch;
