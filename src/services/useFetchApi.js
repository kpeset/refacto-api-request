import { useEffect, useState } from "react";
import fetchApi from "./fetchApi";

const useFetchQuote = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        const response = await fetchApi(url);
        if (response) {
          setData(response);
        }
      };
      fetchData();
    }, 100);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};

export default useFetchQuote;
