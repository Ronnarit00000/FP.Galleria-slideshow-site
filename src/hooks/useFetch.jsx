import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData(){
      try {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        setData(result.map((el, index) => Object.assign({}, el, {id: index})));
      } catch (error) {
        setError(error)
      } finally{
        setLoading(false);
      }
    } 

    fetchData();
  },[url])

  return {loading, error, data}
};