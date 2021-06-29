import { useState, useEffect } from "react"
import axios from "axios";

const useCollection = (id) => {
    const [collection, setCollet]=useState([]);
    const [loading, setLoading] = useState(true);

    const api = axios.create({
        baseURL: "https://api.themoviedb.org/3/",
        params: {
          api_key: "a6517f9d2b3c3b708bf7a5e6a1753125",
          language: "en-US"
        }
      });

    const getCollect = async () => {
        const {data: {parts}} = await api.get(`collection/${id}`);
        setCollet(parts)
        setLoading(false);
    }

    useEffect(() => {
        getCollect()
    },[])

    return {collection, loading}
}

export default useCollection