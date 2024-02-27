import { ChevronDown } from 'lucide-react'
import React from 'react'

export function FooterFour() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#212731]">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
         
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h2 className="tracking-px mb-9  text-md  uppercase text-white">
              Categories
              </h2>
              <ul className='text-white'>
                <li className="mb-4">
                  <a className=" text-sm   hover:text-gray-700" href="#">
                  Web Builder
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-sm   hover:text-gray-700" href="#">
                  Hosting
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-sm   hover:text-gray-700" href="#">
                  Data Center
                  </a>
                </li>
                <li>
                  <a className=" text-sm   hover:text-gray-700" href="#">
                  Robotic-Automation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
            <h2 className="tracking-px mb-9 uppercase  text-md  uppercase text-white">
            Contact
              </h2>
              <ul>
                <li className="mb-4">
                  <a className=" text-sm font-medium text-white hover:text-gray-700" href="#">
                  Contact
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-sm font-medium text-white hover:text-gray-700" href="#">
                  Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-sm font-medium text-white hover:text-gray-700" href="#">
                  Terms Of Service
                  </a>
                </li>
                <li>
                  <a className=" text-sm font-medium text-white hover:text-gray-700" href="#">
                  Categories
                  </a>
                </li>
                <li>
                  <a className=" text-sm font-medium text-white hover:text-gray-700" href="#">
                  About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full p-6 md:w-1/2 lg:w-3/12">
          <div className="flex items-center justify-center">
          <p className=" text-[12px]  text-[#ffffff]">United States</p>
          <ChevronDown width={20} height={20} color='#D1D6DA' />
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}
