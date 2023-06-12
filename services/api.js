import React,{ useState, useEffect} from 'react';
import http from '../http'

  export const getAll = () => {
    const [data, setData] = react.useState({});

React.useEffect(() => {
  
  http.get('/api/Badge').then(response => {setData(response.data)})
},[])
return {data}
}   