import React, { Fragment, useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
import GitImg from "./git-bg.jpg";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div style={userStyle}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
        {!users.length && !loading && (
          <img
            src={GitImg}
            alt='bg-git'
            style={{
              width: "350px",
              margin: "auto",
              display: "block",
            }}
          />
        )}
      </Fragment>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
