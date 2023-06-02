import { Navigation, Footer } from "../../components";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
export default RootLayout;
