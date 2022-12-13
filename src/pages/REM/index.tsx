import React from "react";
import { useViewport } from "../../hooks/viewortContext";
import MobileComponent from "../MobileLayout";
import PComponent from "../PCLayout";

const Rem = () => {
  //当宽度小于1024时 切换为手机端
  const { width } = useViewport();
  const breakpoint = 1024;
  return width < breakpoint ? <MobileComponent /> : <PComponent />;
};

export default Rem;
