import React from "react";
import "./Header.css";

export default ({black}) => {
  return (
    <header className={black ? 'blackHeader' : ''}>
      <div className="headerLogo">
        <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
            alt="logo"/>
        </a>
      </div>
      <div className="headerUser">
        <a href="#">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/84c20033850498.56ba69ac290ea.png"
            alt="logo"/>
        </a>
      </div>
    </header>
  );
};
