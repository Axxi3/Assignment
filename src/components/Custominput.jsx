import React from 'react'

export default function Custominput() {
  return (
    <div class="w-full md:w-2/3">
    <input
      class="flex h-10 w-full rounded-[12px] sm:rounded-l-lg border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      type="email"
      placeholder="Email"
    />
  </div>
  )
}
