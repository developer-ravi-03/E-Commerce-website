import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const addresses = [
  {
    email: "ravibseb96@gmail.com",
    name: "John wick",
    street: "11th Main",
    city: "delhi",
    pincode: 853204,
    state: "Bihar",
    phone: 2918738942,
  },
  {
    email: "ravibseb76@gmail.com",
    name: "Ravi wick",
    street: "11th Main",
    city: "bhagalpur",
    pincode: 398398,
    state: "Delhi",
    phone: 2918738942,
  },
];

const Checkout = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form className="bg-white px-5 mt-12 mb-12 py-12">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        id="street-address"
                        name="street-address"
                        type="text"
                        autoComplete="street-address"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        id="region"
                        name="region"
                        type="text"
                        autoComplete="address-level1"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        id="postal-code"
                        name="postal-code"
                        type="text"
                        autoComplete="postal-code"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Address
                </button>
              </div>

              {/* Address section  */}
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Addresses
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Choose from existing address
                </p>
                <ul role="list" className="mt-6 space-y-4">
                  {addresses.map((address) => (
                    <li
                      key={address.email}
                      className="relative flex items-start rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id={`address-${address.email}`}
                          name="selected-address"
                          type="radio"
                          className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <label
                          htmlFor={`address-${address.email}`}
                          className="cursor-pointer"
                        >
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm font-semibold text-gray-900">
                                {address.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {address.email}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {address.street}, {address.city},{" "}
                                {address.state}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-gray-600">
                                {address.phone}
                              </p>
                              <p className="text-sm text-gray-500">
                                PIN: {address.pincode}
                              </p>
                            </div>
                          </div>
                        </label>
                      </div>
                    </li>
                  ))}
                  {/* <button
                    type="button"
                    className="mt-4 flex w-full items-center justify-center rounded-md border border-dashed border-gray-300 px-4 py-3 text-sm font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all duration-150"
                  >
                    <span className="mr-2">+</span> Add new address
                  </button> */}
                </ul>

                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-sm/6 font-semibold text-gray-900">
                      Payment Methods
                    </legend>
                    <p className="mt-1 text-sm/6 text-gray-600">Choose One</p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          defaultChecked
                          id="cash"
                          name="payments"
                          type="radio"
                          className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                        />
                        <label
                          htmlFor="cash"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          Cash
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="card"
                          name="payments"
                          type="radio"
                          className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                        />
                        <label
                          htmlFor="card"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          Card Payments
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Cart */}
        <div className="lg:col-span-2">
          <div className="min-h-screen bg-gray-50 mt-12">
            <div className="mx-auto max-w-7xl px-0 sm:px-0 lg:px-0">
              <div className="rounded-lg bg-white shadow-lg">
                <div className="px-6 py-8 sm:px-8">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                    Shopping Cart
                  </h1>
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {products.map((product) => (
                        <li
                          key={product.id}
                          className="flex py-8 hover:bg-gray-50 transition-colors duration-150 rounded-lg px-4"
                        >
                          <div className="size-32 shrink-0 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                            <img
                              alt={product.imageAlt}
                              src={product.imageSrc}
                              className="size-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          <div className="ml-6 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3 className="text-lg font-semibold">
                                  <a
                                    href={product.href}
                                    className="hover:text-indigo-600 transition-colors"
                                  >
                                    {product.name}
                                  </a>
                                </h3>
                                <p className="ml-4 text-lg font-bold">
                                  {product.price}
                                </p>
                              </div>
                              <p className="mt-2 text-sm text-gray-500">
                                {product.color}
                              </p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="flex items-center space-x-2 border border-cyan-50 rounded-md px-3 py-2  transition-colors duration-150">
                                <label
                                  htmlFor={`quantity-${product.id}`}
                                  className="text-gray-600 text-sm font-medium"
                                >
                                  Qty
                                </label>
                                <select
                                  id={`quantity-${product.id}`}
                                  defaultValue={product.quantity}
                                  className="block w-16 rounded-md border-0 py-1 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                >
                                  {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <option key={num} value={num}>
                                      {num}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-150"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 bg-gray-50 px-6 py-8 sm:px-8 rounded-b-lg">
                  <div className="flex justify-between text-lg font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p className="font-bold">$262.00</p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-8">
                    <Link
                      to="/pay"
                      className="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors duration-150"
                    >
                      Pay and Order
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <Link to="/">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-150"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> →</span>
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
