import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`
    w-${size} h-64 menu-item m-4 text-white flex flex-col items-center justify-center border-2  overflow-hidden`}
    style={{
      backgroundImage: `url(${imageUrl})`,
      overflow: 'hidden'
    }}
  onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="content flex flex-col justify-center align-center items-center absolute">
      <h1 className="bg-pink-400 m-3 text-xl font-bold">{title}</h1>
      <span
        className=" bg-pink-400 border p-3
            hover:bg-white hover:cursor-pointer hover:text-black"
      >
        Shop now
      </span>
    </div>
  </div>
);

export default withRouter(MenuItem);
