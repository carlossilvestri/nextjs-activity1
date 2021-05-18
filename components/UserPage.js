import { Fragment } from "react";
// import styles from "../styles/Home.module.css";

export default function UserPage({ user }) {
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
                <button type="button" className="btn-principal mx-auto btn-crear">
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
