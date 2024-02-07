// Breadcrumbs.js
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const home = "Home";
  return (
    <div>
      <Link to="/" className="text-neutral-500" key={home}>{home} / </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        
        const isLast = index === pathnames.length - 1;
        //console.log(routeTo);
        return isLast ? (
          <> 
          <Link key={name} to={routeTo}>
            {name} 
          </Link>
            
          </>
        ) : (
          <Link key={name} to={routeTo}>
            {name} /{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
