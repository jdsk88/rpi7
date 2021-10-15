import { useState, useEffect } from "react";

const h = [];
const w = [];
const display = [w, h];
const enDisCheck = () => {
  const WIDTH = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const RESIZE = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", RESIZE);
      if ((w.length = 0)) {
        w.spice(0);
      }
      w.push(width);
      return () => window.removeEventListener("resize", RESIZE);
    }, [width]);
  };
  const HEIGHT = () => {
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
      const RESIZE = () => {
        setHeight(window.innerHeight);
      };
      window.addEventListener("resize", RESIZE);
      if ((h.length = 0)) {
        h.spice(0);
      }
      h.push(height);

      return () => window.removeEventListener("resize", RESIZE);
    }, [height]);
  };
  WIDTH();
  HEIGHT();
};
export const DisplayCheck = {
  EnableDisplayCheck: enDisCheck,
  W: w,
  H: h,
  WH: display,
};
