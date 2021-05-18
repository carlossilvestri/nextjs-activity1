import { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header";
import UserPage from "../../components/UserPage";
import { getUserCallHttp } from "../../functions/userService";
import Router, { useRouter } from "next/router";
import clienteAxios from "../../config/axios";


export default function Users() {
  const router = useRouter();
  const [user, setUser] = useState({_id: 0, name: ''});
  const { query: {id}} = router;
  useEffect(() => {
    if(id){
      getUserCallHttp(id, setUser);
    }
  }, [id]);
  return (
    <Fragment>
      <Header/> 
      <UserPage  user={user}/>
    </Fragment>
  );
}
