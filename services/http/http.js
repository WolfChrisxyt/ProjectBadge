import axios from 'axios';
const {Api} = require("Api");

    const http = axios.create ({
            baseURL:'http://academico3.rj.senac.br/api'
    })


    export default http;