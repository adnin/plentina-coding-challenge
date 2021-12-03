import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Product from "../components/Product";
import ProductQuickviews from "../components/ProductQuickviews";

//Actions
import { getProducts as listProducts } from "../state/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const selectedProductHandler = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="bg-white mt-5 md:mt-0">
      {loading ? (
        <Loader />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h5 className="text-2xl font-extrabold tracking-tight text-red-600 hover:text-red-600 cursor-pointer">
            How fast do you want to go?
          </h5>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                open={() => selectedProductHandler(product)}
              />
            ))}
          </div>
        </div>
      )}

      <ProductQuickviews
        show={showModal}
        product={selectedProduct}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default HomeScreen;
