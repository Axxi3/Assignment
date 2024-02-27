import React from 'react'
import { Home, ChevronRight } from 'lucide-react'

export function Breadcrumbs() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <a href="#" className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
            Hosting for all
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <span className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
            Hosting
            </span>
          </div>
        </li> 
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <a href="#" className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
            Hosting6
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <a href="#" className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
            Hosting5
            </a>
          </div>
        </li>
      
      </ol>
    </nav>
  )
}
