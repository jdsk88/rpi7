import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonList = ({ Data, display }) => {
  const render_ListItem = (listData) => (
    <>
      {Object.keys(listData).map((key) => (
        <Link
          id={key}
          style={{
            textDecoration: "none",
            color: "whitesmoke",
            width: "20%",
          }}
          to={`/${listData[key][3]}`}
          key={key + listData[key][1]}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: 40,
              justifyContent: "space-evenly",
              padding: 5,
              borderRadius: 5,
              alignItems: "center",
              overflowWrap: "break-word",
            }}
            onClick={listData[key][2]}
          >
            {display[0] >= 650 ? <p>{listData[key][1]}</p> : <></>}
            <i>
              <FontAwesomeIcon size="2x" icon={listData[key][0]} />
            </i>
          </div>
        </Link>
      ))}
    </>
  );

  return <>{render_ListItem(Data)}</>;
};
