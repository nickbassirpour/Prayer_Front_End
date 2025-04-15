import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Saints", href: "#" },
  { name: "Articles", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-20 md:static md:bg-white md:border-b">
      <div className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo here*/}
        <div className="text-lg font-bold hidden md:block">Catholic Saints</div>

        {/* Hamburder for mobile */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white p-2 bg-black/30-rounded"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-500"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="md:hidden relative z-10"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <TransitionChild
            as={Fragment}
            enter="transition ease-out duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel>
              <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="mb-4"
                >
                  <XMarkIcon className="h-6 w-6 text-gray-700" />
                </button>

                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </header>
  );
}
