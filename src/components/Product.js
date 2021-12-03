import NumberFormat from "react-number-format";

const Product = (props) => {
  const product = props.product;
  return (
    <div className="group relative">
      <div className="w-full min-h-64 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-64 lg:aspect-none">
        <img
          src={product.image}
          alt={product.image}
          className="object-contain w-full h-full object-center lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.speed}
            </span>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.plan_type}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          <NumberFormat
            value={product.default_router.price}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
          />
        </p>
      </div>
    </div>
  );
};

export default Product;
