import React from 'react'

export default function Footer(){
    return (
<div class="max-w-full mt-8 mx-auto">

	<footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
		<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://icanhazdadjoke.com/api" class="hover:underline" target="_blank">DadJokes</a>. All Rights Reserved.
    </span>
		<ul class="flex flex-wrap items-center mt-3 sm:mt-0">
			<li>
				<a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
			</li>
			<li>
				<a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
					Policy</a>
			</li>
			<li>
				<a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
			</li>
			<li>
				<a href="#" class="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
			</li>
		</ul>
	</footer>
</div>
    )
}