import { useEffect, useState } from "react"
import axios from "axios";

const useApi = (URL) => {
    const [content, setContent] = useState(null);

    const api = axios.create({
        baseURL: "https://api.themoviedb.org/3/",
        params: {
          api_key: "a6517f9d2b3c3b708bf7a5e6a1753125",
          language: "en-US"
        }
      });

    const getAPI = async () => {
      const {data: {results}} = await api.get(URL); 
      setContent(results);
    }

    useEffect(() => {
        getAPI();
    }, [])

    return content
}

export default useApi;