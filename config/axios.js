import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://api-activity1.herokuapp.com'
});
export default clienteAxios;