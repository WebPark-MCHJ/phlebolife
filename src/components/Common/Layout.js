import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, navigation, ...props }) => (
  <div {...props}>
    <Header navigation={navigation} />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
