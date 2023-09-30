import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;

// Objasnjenje:
// Proveravam da li je putanja jednaka ovim poljima i da li korisnik ne postoji. Ako je to tacno, ne vracam nista. Ovo radim da bih samo kad korisnik postoji video ta polja
