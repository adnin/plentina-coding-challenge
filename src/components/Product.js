const Product = (props) => {
  const product = {
    name: "Test Product",
    imageSrc:
      "https://viewqwest.com/wp-content/uploads/2021/06/tiles_n_build_1Gbps.png",
    imageAlt: "Router",
    href: "#",
    color: "red",
    price: 150
  };
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="object-contain w-full h-full object-center lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
