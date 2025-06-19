/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, selectCount } from "./cartSlice";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
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

export default function Cart() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                to="/checkout"
                className="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors duration-150"
              >
                Proceed to Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <Link to="/">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
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
  );
}
