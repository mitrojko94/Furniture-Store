import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";

const url = "/products";

// QUERY CLIENT
const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 10000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export const loader =
  (QueryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await QueryClient.ensureQueryData(
      allProductsQuery(params)
    );
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;

// Objasnjenje:
// Objasnjenje za varijablu params mogu pronaci u fajlu README.md
// Ako hocu da koristim neke varijable u drugim komponentama moram da ih vratim, tipa return {meta}
// ?? ako stavim ovo, to znaci da prosledjujem neki default vrednost, ako nema prave vrednosti
