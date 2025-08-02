import React from 'react'
import NavbarComponent from './NavbarComponent'

export default function HomePage() {
  return (
    <div>
           <NavbarComponent/>
      <div class="bg-gradient-to-b from-[#101212] relative to-[#08201D]">
   

    <section class="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
        <div class="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
            <img class="hidden w-full lg:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png" alt="" />
            <img class="block w-full lg:hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards-mobile.png" alt="" />
        </div>

        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div class="max-w-xl mx-auto text-center">
                <h1 class="text-4xl font-bold sm:text-6xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white"> Simplified credit cards for students </span>
                </h1>
                <p class="mt-5 text-base text-white sm:text-xl">No more hassle taking loans and making payments. Try Postcrats credit card, make your life simple.</p>

                <a href="#" title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" role="button">
                    Apply for free
                    <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <div class="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
                    <div class="flex items-center">
                        <svg class="flex-shrink-0" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                                stroke="#28CC9D"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                                stroke="#28CC9D"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z"
                                fill="#0B1715"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z"
                                fill="#0B1715"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <p class="ml-3 text-sm text-white">Over 12,000 students joined</p>
                    </div>

                    <div class="flex items-center">
                        <svg class="flex-shrink-0" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M7 12.6667L9.25 15L16 8" stroke="#28CC9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="ml-3 text-sm text-white">No yearly charges, maximum limits</p>
                    </div>

                    <div class="flex items-center">
                        <svg class="flex-shrink-0" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 11H3C1.89543 11 1 11.8954 1 13V21C1 22.1046 1.89543 23 3 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 19C11.1046 19 12 18.1046 12 17C12 15.8954 11.1046 15 10 15C8.89543 15 8 15.8954 8 17C8 18.1046 8.89543 19 10 19Z" stroke="#28CC9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M15 7V6C15.0131 4.68724 14.5042 3.42303 13.5853 2.48539C12.6664 1.54776 11.4128 1.01346 10.1 1H10C8.68724 0.986939 7.42303 1.4958 6.48539 2.41469C5.54776 3.33357 5.01346 4.58724 5 5.9V7"
                                stroke="#28CC9D"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <p class="ml-3 text-sm text-white">Secured & safe online payment</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-end justify-between">
            <div class="flex-1 text-center lg:text-left">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
                <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div class="hidden lg:flex lg:items-center lg:space-x-3">
                <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                        </a>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Lifestyle </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> How to build coffee inside your home in 5 minutes. </a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#" title="" class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Continue Reading
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg" alt="" />
                        </a>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Marketing </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> April 04, 2020 </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> Ho7 Tips to run your remote team faster and better. </a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#" title="" class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Continue Reading
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg" alt="" />
                        </a>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Productivity </span>
                        </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> May 12, 2020 </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> 5 Productivity tips to write faster at morning. </a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#" title="" class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Continue Reading
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>


{/* contact us pageee  REVIEW WORK*/}

<section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
            <div class="flex flex-col justify-between lg:py-5">
                <div>
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">It’s time to build something exciting!</h2>
                    <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>

                    <img class="relative z-10 max-w-xs mx-auto -mb-16 md:hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg" alt="" />

                    <img class="hidden w-full translate-x-24 translate-y-8 md:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg" alt="" />
                </div>

                <div class="hidden md:mt-auto md:block">
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg class="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg class="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg class="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg class="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                    </div>

                    <blockquote class="mt-6">
                        <p class="text-lg leading-relaxed text-white">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
                    </blockquote>

                    <div class="flex items-center mt-8">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg" alt="" />
                        <div class="ml-4">
                            <p class="text-base font-semibold text-white">Jenny Wilson</p>
                            <p class="mt-px text-sm text-gray-400">Product Designer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:pl-12">
                <div class="overflow-hidden bg-white rounded-md">
                    <div class="p-6 sm:p-10">
                        <h3 class="text-3xl font-semibold text-black">Get a free quote</h3>
                        <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                        <form action="#" method="POST" class="mt-4">
                            <div class="space-y-6">
                                <div>
                                    <label for="" class="text-base font-medium text-gray-900"> Your name </label>
                                    <div class="mt-2.5 relative">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter your full name"
                                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                    <div class="mt-2.5 relative">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter your full name"
                                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label for="" class="text-base font-medium text-gray-900"> Project brief </label>
                                    <div class="mt-2.5 relative">
                                        <textarea
                                            name=""
                                            id=""
                                            placeholder="Enter your project brief"
                                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600">
                                        Get Free Quote
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="md:hidden">
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg class="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg class="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg class="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg class="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                </div>

                <blockquote class="mt-6">
                    <p class="text-lg leading-relaxed text-white">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
                </blockquote>

                <div class="flex items-center mt-8">
                    <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg" alt="" />
                    <div class="ml-4">
                        <p class="text-base font-semibold text-white">Jenny Wilson</p>
                        <p class="mt-px text-sm text-gray-400">Product Designer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* CREATE SUCCESS */}

<section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How do we create success</h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <ul class="max-w-md mx-auto mt-16 space-y-12">
            <li class="relative flex items-start">
                <div class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <svg class="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <div class="ml-6">
                    <h3 class="text-lg font-semibold text-black">Create a free account</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </li>

            <li class="relative flex items-start">
                <div class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <svg class="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                </div>
                <div class="ml-6">
                    <h3 class="text-lg font-semibold text-black">Build your website</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </li>

            <li class="relative flex items-start">
                <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <svg class="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div class="ml-6">
                    <h3 class="text-lg font-semibold text-black">Release & launch</h3>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </li>
        </ul>
    </div>
</section>


{/* BLOG SECTION */}

<section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Stories from blog</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
            <div class="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
                <div class="flex flex-col justify-between flex-1 px-5 py-6">
                    <div class="flex-shrink-0">
                        <span class="block text-xs font-semibold tracking-widest text-orange-500 uppercase"> Lifestyle </span>
                    </div>

                    <div class="flex-1 mt-28">
                        <p class="text-2xl font-semibold">
                            <a href="#" title="" class="text-black"> Power of habit: How to learn anything in 30 days. </a>
                        </p>
                        <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>

                <div class="border-t border-gray-200">
                    <div class="flex">
                        <div class="flex items-center flex-1 px-6 py-5">
                            <img class="object-cover w-8 h-8 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-1.jpg" alt="" />
                            <span class="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate"> Wade Warren </span>
                        </div>

                        <a href="#" title="" class="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white">
                            Read more
                            <svg class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
                <div class="flex flex-col justify-between flex-1 px-5 py-6">
                    <div class="flex-shrink-0">
                        <span class="block text-xs font-semibold tracking-widest text-orange-500 uppercase"> Technology </span>
                    </div>

                    <div class="flex-1 mt-28">
                        <p class="text-2xl font-semibold">
                            <a href="#" title="" class="text-black"> 10 Zoom hacks you can do for productive meetings. </a>
                        </p>
                        <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>

                <div class="border-t border-gray-200">
                    <div class="flex">
                        <div class="flex items-center flex-1 px-6 py-5">
                            <img class="object-cover w-8 h-8 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-2.jpg" alt="" />
                            <span class="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate"> Leslie Alexander </span>
                        </div>

                        <a href="#" title="" class="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white">
                            Read more
                            <svg class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
                <div class="flex flex-col justify-between flex-1 px-5 py-6">
                    <div class="flex-shrink-0">
                        <span class="block text-xs font-semibold tracking-widest text-orange-500 uppercase"> Marketing </span>
                    </div>

                    <div class="flex-1 mt-28">
                        <p class="text-2xl font-semibold">
                            <a href="#" title="" class="text-black"> 6 Product launching emails you want to use next. </a>
                        </p>
                        <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>

                <div class="border-t border-gray-200">
                    <div class="flex">
                        <div class="flex items-center flex-1 px-6 py-5">
                            <img class="object-cover w-8 h-8 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-3.jpg" alt="" />
                            <span class="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate"> Jenny Wilson </span>
                        </div>

                        <a href="#" title="" class="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white">
                            Read more
                            <svg class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


{/* PRICING AND PLANNING */}


<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Pricing & Plans</h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-16 sm:grid-cols-2">
            <div class="bg-white border-4 border-transparent rounded-md">
                <div class="p-6 md:py-10 md:px-9">
                    <div class="inline-block px-4 py-2 bg-gray-100 rounded-full">
                        <h3 class="text-sm font-semibold text-gray-900">Standard</h3>
                    </div>
                    <p class="mt-5 text-5xl font-bold text-black">$29</p>
                    <p class="mt-2 text-base text-gray-600">Per month</p>

                    <ul class="flex flex-col mt-8 space-y-4">
                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> 1 Domain License </span>
                            <svg class="w-4 h-4 ml-0.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Full Celebration Library </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> 120+ Coded Blocks </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-400"> Design Files Included </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-400"> Premium Support </span>
                        </li>
                    </ul>

                    <a href="#" title="" class="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-gray-800 rounded-md hover:bg-gray-600 focus:bg-gray-600" role="button"> Get 14 Days Free Trial </a>

                    <p class="mt-5 text-sm text-gray-500">No Credit Card Required</p>
                </div>
            </div>

            <div class="bg-white border-4 border-blue-600 rounded-md">
                <div class="p-6 md:py-10 md:px-9">
                    <div class="inline-block px-4 py-2 bg-blue-100 rounded-full">
                        <h3 class="text-sm font-semibold text-blue-600">Premium</h3>
                    </div>
                    <p class="mt-5 text-5xl font-bold text-black">$49</p>
                    <p class="mt-2 text-base text-gray-600">Per month</p>

                    <ul class="flex flex-col mt-8 space-y-4">
                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Unlimited Domain License </span>
                            <svg class="w-4 h-4 ml-0.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Full Celebration Library </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> 120+ Coded Blocks </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Design Files Included </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Premium Support </span>
                        </li>
                    </ul>

                    <a href="#" title="" class="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80" role="button"> Get 14 Days Free Trial </a>

                    <p class="mt-5 text-sm text-gray-500">No Credit Card Required</p>
                </div>
            </div>
        </div>
    </div>
</section>


{/* TESTINOMIAL */}

<section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Trusted by <span class="text-blue-600">30k+</span> world class companies & design teams</h2>
        </div>

        <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">Jenny Wilson</p>
                    <p class="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg" alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">Robert Fox</p>
                    <p class="mt-1 text-base text-gray-600">Founder at Brain.co</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg" alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">Kristin Watson</p>
                    <p class="mt-1 text-base text-gray-600">UX Designer at Google</p>
                </div>
            </div>
        </div>
    </div>
</section>


{/* FOOTER PAGE */}


<section class="py-10 bg-white sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
            <div class="col-span-2 md:col-span-4 xl:pr-8">
                <img class="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />

                <p class="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                <a href="#" title="" class="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Start Live Chat
                </a>
            </div>

            <div class="lg:col-span-2">
                <p class="text-base font-semibold text-gray-900">Company</p>

                <ul class="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Career </a>
                    </li>
                </ul>
            </div>

            <div class="lg:col-span-2">
                <p class="text-base font-semibold text-gray-900">Help</p>

                <ul class="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

            <div class="lg:col-span-2">
                <p class="text-base font-semibold text-gray-900">Resources</p>

                <ul class="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Free eBooks </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Development Tutorial </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> How to - Blog </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> YouTube Playlist </a>
                    </li>
                </ul>
            </div>

            <div class="lg:col-span-2">
                <p class="text-base font-semibold text-gray-900">Extra Links</p>

                <ul class="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <div class="sm:flex sm:items-center sm:justify-between">
            <p class="text-sm text-gray-600">© Copyright 2021, All Rights Reserved by Postcraft</p>

            <ul class="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                <li>
                    <a
                        href="#"
                        title=""
                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                            ></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                            <path
                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                            ></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                            ></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>

    </div>
  )
}
