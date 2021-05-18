import Swal from "sweetalert2";
import clienteAxios from "../config/axios";

const createUserCallHttp = async (user = {}, setUsers, users) => {
    if(user === {}){
        Swal.fire(
            'Error',
            'User is empty',
            'success'
          );
        return;
    }
    
    try {
      const url = '/user';
      console.log('url ', url);
    //   console.log('clienteAxios ', clienteAxios);
    //   console.log('clienteAxios ', clienteAxios);
      // console.log('process.env.REACT_APP_BACKEND_URL ', process.env.REACT_APP_BACKEND_URL);
      const result = await clienteAxios.post(url, user);
      console.log("result  ", result);
      setUsers([...users, result.data.usuario]);
      Swal.fire(
        'Created!',
        'Your user has been created',
        'success'
      );
    } catch (error) {
      console.log("There was a mistake: ", error);
    }
  }
  const getUsersCallHttp = async (setUsers) => {
    let result;
    try {
      const url = '/user';
      console.log('url ', url);
    //   console.log('clienteAxios ', clienteAxios);
    //   console.log('clienteAxios ', clienteAxios);
      // console.log('process.env.REACT_APP_BACKEND_URL ', process.env.REACT_APP_BACKEND_URL);
      result = await clienteAxios.get(url);
      console.log("results  ", result);
      setUsers(result.data.usuarios);
    } catch (error) {
      result = error;
      console.log("There was a mistake: ", error);
    }finally{
      return result;
  }
  }
  const getUserCallHttp = async (_id = 0, setUser) => {
    let result;
    try {
      const url = '/user/' + _id;
      console.log('url ', url);
    //   console.log('clienteAxios ', clienteAxios);
    //   console.log('clienteAxios ', clienteAxios);
      // console.log('process.env.REACT_APP_BACKEND_URL ', process.env.REACT_APP_BACKEND_URL);
      result = await clienteAxios.get(url);
      console.log("result  ", result);
      setUser(result.data.cliente);
    } catch (error) {
        result = error;
      console.log("There was a mistake: ", error);
    }finally{
        return result;
    }
  }

  module.exports = {
    createUserCallHttp,
    getUsersCallHttp,
    getUserCallHttp
  }