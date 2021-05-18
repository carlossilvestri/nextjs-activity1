import { Fragment, useState, useEffect } from "react";
// import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function UserPage({ user }) {
  const router = useRouter();
  const [copyToClipboard, setcopyToClipboard] = useState('');
  useEffect(() => {
    if (router.query.q) {
      let { q } = router.query;
      setcopyToClipboard(window.location.hostname + `/q=${q}`)
    }
    if (router.query.id) {
      let { id} = router.query;
      setcopyToClipboard(window.location.hostname + `/q=${id}`)
    }
  }, [router]);
  const { _id, name } = user;
  return (
    <Fragment>
      <div>
        <div className="container">
          <div className="cont-agregar-medicamento">
            <h3 className="title-2 text-center mt-2">{name} User Page.</h3>
            <div>
              <div className="mb-3 text-center">
                <label htmlFor="exampleInputText" className="form-label">
                  This page is for User {name}
                </label>
              </div>
              <div className="row">
                <button type="button" className="btn-principal mx-auto btn-crear"
                onClick={() =>  navigator.clipboard.writeText(copyToClipboard)}
                >
                  Share
                </button>
              </div>
              <div className="row">
                <button type="button" className="btn-principal mx-auto btn-crear">
                  Send Notification
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
