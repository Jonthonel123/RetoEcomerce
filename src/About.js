import SeccionPrincipal from "./components/SeccionPrincipal";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Ecomerce",
  };
  return (
    <>
      {myName}
      <SeccionPrincipal myData={data} />
      {""}
    </>
  );
};

export default About;
