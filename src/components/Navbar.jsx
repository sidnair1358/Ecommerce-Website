import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Bag from "./Bag";

//TODO: Remove hard-coded ids and replace with dynamic data
const navigation = [
  { name: "Featured", id: "429512622102" },
  { name: "Men", id: "429493780502" },
  { name: "Women", id: "429493813270" },
  { name: "Unisex", id: "429493846038" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewBag, setViewBag] = useState(false);

  return (
    <div className="bg-stone-100">
      <header className="relative inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between h-36 p-5 lg:px-5"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Comfortable Clothing</span>
              <img
                className="h-20 w-auto rounded-lg"
                src="/shop-logo.jpg"
                alt="Shop Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            {!viewBag && (
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </div>
          <div className="hidden lg:flex lg:gap-x-20">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="text-xl font-bold leading-6 text-gray-600"
              >
                <Link key={item.name} href={`/products/${item.id}`}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {!viewBag && (
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Search Icon</span>
                <MagnifyingGlassIcon
                  className="h-6 w-6 mr-5"
                  aria-label="Shopping Bag"
                />
              </button>
            )}
            {!viewBag && (
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setViewBag(true);
                }}
              >
                <span className="sr-only">Shoppin Bag Icon</span>
                <ShoppingBagIcon
                  className="h-6 w-6 mr-5 z-0"
                  aria-label="Shopping Bag"
                />
              </button>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Comfortable Clothing</span>
                <img
                  className="h-8 w-auto"
                  src="/shop-logo.jpg"
                  alt="Shop Logo"
                />
              </a>
              <div>
                {!viewBag && (
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setViewBag(true);
                    }}
                  >
                    <span className="sr-only">Shoppin Bag Icon</span>
                    <ShoppingBagIcon
                      className="h-6 w-6 mr-5 z-0"
                      aria-label="Shopping Bag"
                    />
                  </button>
                )}
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.id}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        {viewBag && <Bag setViewBag={setViewBag} />}
      </header>
    </div>
  );
};

export default Navbar;
