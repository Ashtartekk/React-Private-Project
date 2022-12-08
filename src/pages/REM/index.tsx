import React from "react";
import { useViewport } from "../../hooks/viewortContext";
import MobileComponent from "../Mobile";
import PComponent from "../PC";

const Rem = () => {
  const { width } = useViewport();
  const breakpoint = 1024;
  return width < breakpoint ? <MobileComponent /> : <PComponent />;
};

export default Rem;
