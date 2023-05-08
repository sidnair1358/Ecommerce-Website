import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="absolute">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
