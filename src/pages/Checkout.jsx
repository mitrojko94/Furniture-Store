import { CheckoutForm, CartTotals, SectionTitle } from "../components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout!");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty!" />;
  }

  return (
    <>
      <SectionTitle text="Place your order!" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;

// Ako ne mogu da pristupim podacima iz store, jer ne mogu da koristim useSelector, jer mi loader nije Hook, to radim tako sto prosledim store
// AKo nema korisnika, nije ulogovan, onda da se napise neka poruka preko toast.warn i da se prebaci odmah na login stranicu
// Koristim getState da bih dobio usera, a njemu stavljam ime usera iz store, a to je u ovom slucaju userState i on ima polje user. Tako dobijem korisnika
