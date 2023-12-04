import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoCopyOutline } from "react-icons/io5";

export function WithdrawModal({ setShowWithdrawnModal, showWithdrawnModal }) {

  return (
    <Transition
      appear
      show={true}
      as={Fragment}
    >
      <Dialog open={showWithdrawnModal} onClose={() => null} className="z-10 bg-white">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              className="bg-zinc-800 rounded-md text-white p-6"
            >
              <Dialog.Panel>
                <Dialog.Title className="text-start block text-3xl">Withdraw Fund</Dialog.Title>
                <Dialog.Description className="text-start block text-base w-[60%] mt-2">
                  Employee salaries will be sent out on the scheduled date and time
                </Dialog.Description>

                <div className='my-20 block text-start w-full'>
                  <div className='mb-2 w-full'>
                    <p className=''>
                      Amount to Withdraw
                    </p>
                    <input type="number" placeholder="$0.00" className='bg-transparent border rounded-lg mt-2 border-white text-xl p-2 outline-white focus:outline-0 font-bold appearance-none w-full' />
                  </div>
                  <div className='mb-2 mt-4 w-full'>
                    <p className=''>
                      Withdraw Destination (USDT Wallet)
                    </p>
                    <input type="text" placeholder="$0.00" className='bg-transparent border rounded-lg mt-2 border-white text-xl p-2 outline-white focus:outline-0 font-bold appearance-none w-full' />
                  </div>
                </div>

                <div className='flex w-full items-center gap-3 mt-16'>
                  <button onClick={() => setShowWithdrawnModal(false)} className="w-full bg-zinc-500 text-white p-3 rounded-[8px]">Cancel</button>
                  <button onClick={() => setShowWithdrawnModal(false)} className="w-full bg-[#63D9B9] text-black p-3 rounded-[8px]">Withdraw Funds</button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}