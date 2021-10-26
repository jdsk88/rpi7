import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { deviceServices } from "../services/devices";

export const Settings = () => {
  const { data } = useContext(DataContext);

  return (
    <div style={{ marginTop: 50 }}>
      {data.map((device) => (
        <>
          <p>{device.ip}</p>
          <p>{device.name}</p>
          <p>{device.frendlyName}</p>
          <p>{device.type}</p>
          <p> {device.location}</p>
          <p>{device.producer}</p>
          {device.controls.relays.map((relay) => (
            <>
              <label>{relay.name}</label>
              <button
                onClick={() => {
                  axios.get("http://192.168.0.11/s/1/1").then((r)=>console.log(r));
                }}
              >
                <FontAwesomeIcon icon={relay.type} />
                <label>On</label>
              </button>

              <button
                onClick={() => {
                  axios.get("http://192.168.0.11/s/1/0");
                }}
              >
                <FontAwesomeIcon icon={relay.type} />
                <label>Off</label>
              </button>
              <p>{relay.on}</p>
              <p>{relay.off}</p>
              <p>{relay.state}</p>
            </>
          ))}
        </>
      ))}
    </div>
  );
};
