/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

import NumberFormat from "react-number-format";

const product = {
  id: 0,
  name: "",
  price: 0,
  rating: 3.9,
  imageSrc: "",
  imageAlt: "",
  vas: []
};

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const ProductQuickviews = (props) => {
  const [show, setShow] = useState(props.show);
  if (props.product) {
    product.imageSrc = props.product.image;
    product.name = props.product.default_router.name;
    product.price = props.product.default_router.price;
    product.vas = props.product.vas;
  }
  const showModalHandler = (value) => {
    props.setShowModal(false);
    setShow(value);
  };
  useEffect(() => {
    setShow(props.show);
  }, [props]);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-20 inset-0 overflow-y-auto"
        onClose={() => {
          showModalHandler(false);
        }}
      >
        <div
          className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => {
                    showModalHandler(false);
                  }}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="shadow-lg aspect-w-2 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5 hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-center object-contain"
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2
                      data-test="product-id"
                      className="text-2xl font-extrabold text-red-600 sm:pr-12"
                    >
                      {product.name}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-2"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">
                        <NumberFormat
                          value={product.price}
                          displayType="text"
                          thousandSeparator={true}
                          prefix="$"
                        />
                      </p>

                      {/* Reviews */}
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  product.rating > rating
                                    ? "text-yellow-500"
                                    : "text-gray-200",
                                  "h-5 w-5 flex-shrink-0"
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {product.rating} out of 5 stars
                          </p>
                        </div>
                      </div>
                    </section>

                    <section
                      aria-labelledby="options-heading"
                      className="mt-10"
                    >
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        {/* VAS */}
                        <div className="mt-10">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm text-gray-900 font-bold">
                              Value Added Service
                            </h4>
                            <span className="font-medium text-gray-500">
                              FREE
                            </span>
                          </div>

                          <RadioGroup className="mt-4">
                            <div className="grid grid-cols-2 gap-4">
                              {product.vas.map((v) => (
                                <RadioGroup.Option
                                  key={v.name}
                                  value={v}
                                  disabled={!v.inStock}
                                  className="ring-blue-500 bg-red-600 shadow-sm text-white cursor-pointer group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-white hover:text-red-500 focus:outline-none sm:flex-1"
                                >
                                  <RadioGroup.Label as="p">
                                    {v.name}
                                  </RadioGroup.Label>
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProductQuickviews;
