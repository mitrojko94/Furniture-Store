import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;

// Objasnjenje:
// Ono sto sam stavio ovde tipa navbar, bice prikazan na svim stranicama, a Outlet prikazuje samo sadrzaj komponente
