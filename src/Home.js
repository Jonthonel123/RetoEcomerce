import React from "react";
import SeccionPrincipal from "./components/SeccionPrincipal";
import Truested from "./components/Truested";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const data = {
    name: "Ecomerce ",
  };
  return (
    <>
      <SeccionPrincipal myData={data} />
      <FeatureProduct />
      <Services />
      <Truested />
    </>
  );
};

export default Home;
