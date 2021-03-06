import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'



const Hire_drop = () => {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  
    return (
      <>
        <div className="inline">
          <button
            type="button"
            onClick={openModal}
            className="bg-gray-800 text-white p-3 mt-5 rounded-md mr-5 text-2xl px-6 shadow-lg transition-all ease hover:shadow-red-600 hover:bg-red-500  hover:shadow-xl  tracking-wide"
          >
            Hire me !
          </button>
        </div>
  
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>
  
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform backdrop-blur-sm bg-gray-900 bg-opacity-50  dark:bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-white dark:text-gray-900"
                  >
                    Hire Me!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-white dark:text-gray-500">
                      Hi, Glad that you are here and if you like to work with me please reach me with one of the following links.
                      <div className='mt-3 text-lg'>
                      <a href="https://www.github.com/lazydiv" className='bi bi-github mr-3'></a>
                      <a href="https://www.instagram.com/yahia_khalid_/" className='bi bi-instagram mr-3'></a>
                      <a href="https://www.linkedin.com/mynetwork/" className='bi bi-linkedin mr-3'></a>
                      </div>
                    </p>
                  </div>
  
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-white dark:bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
  )
}

export default Hire_drop