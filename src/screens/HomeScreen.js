import Loader from "../components/Loader";
import Product from "../components/Product";
import ProductQuickviews from "../components/ProductQuickviews";

const HomeScreen = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const selectedProduct = null;
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h4 className="text-2xl font-extrabold tracking-tight text-blue-500">
          How fast do you want to go?
        </h4>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product} />
          ))}
        </div>

        <Loader />
      </div>

      <ProductQuickviews open={true} />
    </div>
  );
};

export default HomeScreen;
