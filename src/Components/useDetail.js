import React, { useState, useEffect } from "react"
import axios from "axios";

const useDetail = (props) => {
    const [detail, setDetail]=useState([]);
    const [loading, setLoading] = useState(true);
    let path

    const check = () => {
        const {location: { pathname }, match: {params: { id }}, history: { push }} = props;
        path = pathname;
        const parsedId = parseInt(id);
          if (isNaN(parsedId)) {
            return push("/");
          }
    }

    const api = axios.create({
        baseURL: "https://api.themoviedb.org/3/",
        params: {
          api_key: "a6517f9d2b3c3b708bf7a5e6a1753125",
          language: "en-US"
        }
      });

    const getDetail = async () => {
        const {data} = await api.get(`${path}`);
        setDetail(data)
        setLoading(false);
    }

    useEffect(() => {
        check()
        getDetail()
    },[])

    return {detail, loading}
}

export default useDetail