// import axios from "axios";
import React, { useState, useEffect } from 'react';
import { requestData } from "../services/request";

const GamesTable = () => {
    const [posts, setPosts] = useState([])

    // const requestData = async (endpoint) => {
    //   const { data } = await api.get(endpoint);
    //   return data;
    // };

    // const getGames = (endpoint) => requestData(endpoint)
    // .then((response) => setPosts(response))
    // .catch((error) => console.log(error));

    useEffect(() => {
      async function getPost() {
        const getInvoices = await requestData('/invoice')
        setPosts(getInvoices);
      }
      getPost();
    }, []);
  
    return (
        <>
            <h1>hellow 2</h1>
            {posts.map((post, key) => {
                return (
                    <h1>Funciona</h1>
                )
            })}
        </>
    );
};

export default GamesTable;
