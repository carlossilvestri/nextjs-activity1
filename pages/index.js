import { Fragment, useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Link from "next/link";
import {
  createUserCallHttp,
  getUserCallHttp,
  getUsersCallHttp,
} from "../functions/userService";
import Router, { useRouter } from "next/router";
import UserPage from "../components/UserPage";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({ name: "" });
  const [users, setUsers] = useState([{ _id: 0, name: "" }]);
  const [q, setQ] = useState("");
  const [userQ, setUserQ] = useState({ _id: 0, name: "" });
  const [error, setUserError] = useState(false);
  const [activarEffect, setActivarEffect] = useState(false);
  //Leer los datos del formulario
  const leerInformacionUsuario = (e) => {
    setUser({
      [e.target.name]: e.target.value,
    });
    setActivarEffect(true);
    // For debugging.
    // console.log('user ', user);
  };
  useEffect(() => {
    if (activarEffect) {
      checkUserError();
    }
  }, [user]);
  useEffect(() => {
    if (router.query.q) {
      let { q } = router.query;
      setQ(q);
      console.log(" q ", q);
    }
  }, [router]);
  useEffect(() => {
    if (q) {
      getUserCallHttp(q, setUserQ);
    }
  }, [q]);
  useEffect(() => {
    getUsersCallHttp(setUsers);
  }, []);
  const createUser = () => {
    let hayError = checkUserError();
    if (hayError) {
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        createUserCallHttp(user, setUsers, users);
      }
    });
  };
  const checkUserError = () => {
    console.log("user ", user);
    if (user === "" || user.name == "") {
      setUserError(true);
      return true;
    }
    setUserError(false);
    return false;
  };
  /*const handleSearch = (ev) => {
    ev.preventDefault();
    Router.push(`?q=${searchText}`);
  }*/
  return (
    <Fragment>
      <Header />
      <div>
        {q === "" ? (
          <div className="container">
            <div className="cont-agregar-medicamento">
              <h3 className="title-2 text-center mt-2">Create Users</h3>
              <div>
                <div className="mb-3">
                  <label htmlFor="exampleInputText" className="form-label">
                    User's name
                  </label>
                  <input
                    type="text"
                    onChange={leerInformacionUsuario}
                    className="form-control"
                    id="exampleInputText"
                    aria-describedby="textHelp1"
                    name="name"
                    placeholder="User's name"
                  />
                </div>
                {error ? (
                  <span className="error-input">It's required</span>
                ) : null}
                <div className="row">
                  <button
                    type="button"
                    className="btn-principal mx-auto btn-crear"
                    onClick={createUser}
                  >
                    CREATE
                  </button>
                </div>
              </div>
            </div>
            {/* List o users */}
            {users.length > 0 ? (
              <div className="container">
                <h3 className="title-2 text-center mt-2">List of Users</h3>
                <ul className="list-group">
                  {users.map((user, index) => (
                    <li key={`User-${index}`} className="list-group-item">
                      <Link href={`/user/${user._id}`}>{user.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : null}
        {q != "" ? <UserPage user={userQ} /> : ""}
      </div>
    </Fragment>
  );
}
