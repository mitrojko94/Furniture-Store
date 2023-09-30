import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

// QUERY CLIENT
const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;

// Objasnjenje:
// U loaderu uvek, ali uvek moram nesto da vratim
// Uvek vracam response.data kad radim sa Axios bibliotekom
// Najbolje je razbiti data objekat, to sam uradio. To je {data} = response.data. To je bitno kad radim sa velikim projektima. Isto je to kao ovo sto sam uradio sa products
// Dodatno objasnjenje za rad sa query clientom
