import React from 'react';

export default function Header() {
    return (
        <div class="bg-white mb-8">
  <div class="border py-3 px-6">
    <div class="flex justify-between">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
        <span class="ml-2 font-semibold text-[#252C32]">Dad Jokes API</span>
      </div>

      <div class="ml-6 flex flex-1 gap-x-3">
        <input type="text" class="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" />
      </div>

      <div class="ml-2 flex">
        <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium">Favorites</span>
        </div>
        <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
          <span class="text-sm font-medium">Sign in</span>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
}