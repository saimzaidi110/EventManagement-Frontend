import React, { useState } from 'react'
import NavbarComponent from '../component/NavbarComponent'
import FooterComponent from '../component/FooterComponent'
import axios from 'axios'
import {toast} from 'react-toastify'
export default function ContactusPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData)
            const res = await axios.post("http://localhost:3000/api/contact", formData);
            if (res.data.success) {
               toast.success("✅ Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", company: "", message: "" });
            }
        } catch (error) {
            toast.error("❌ Failed to send message. Try again.");
        }
    };
    return (
        <div>
            <NavbarComponent />
            <section class="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Contact us</h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                    </div>

                    <div class="max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20">
                        <div class="grid items-stretch grid-cols-1 lg:grid-cols-5">
                            <div class="lg:col-span-3">
                                <div class="p-6 sm:p-10">
                                    <h3 class="text-2xl font-semibold text-black">Send us a message</h3>

                                    <form onSubmit={handleSubmit} class="mt-8">
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                            <div>
                                                <label for="" class="text-base font-medium text-gray-900"> Your name </label>
                                                <div class="mt-2.5 relative">
                                                    <input type="text" name="name" id="" placeholder=""
                                                        onChange={handleChange} class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label for="" class="text-base font-medium text-gray-900"> Your email </label>
                                                <div class="mt-2.5 relative">
                                                    <input type="email" name="email" id="" placeholder=""
                                                        onChange={handleChange} class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label for="" class="text-base font-medium text-gray-900"> Phone number </label>
                                                <div class="mt-2.5 relative">
                                                    <input type="tel" name="phone" id="" placeholder=""
                                                        onChange={handleChange} class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label for="" class="text-base font-medium text-gray-900"> Company name </label>
                                                <div class="mt-2.5 relative">
                                                    <input type="text" name="company" id="" placeholder=""
                                                        onChange={handleChange} class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="" class="text-base font-medium text-gray-900"> Message </label>
                                                <div class="mt-2.5 relative">
                                                    <textarea
                                                        name="message"
                                                        id=""
                                                        placeholder=""
                                                        onChange={handleChange}
                                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                        rows="4"
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="bg-gray-100 lg:col-span-2">
                                <div class="h-full p-6 sm:p-10">
                                    <div class="flex flex-col justify-between h-full">
                                        <div>
                                            <h4 class="text-2xl font-semibold text-black">Contact info</h4>

                                            <div class="mt-8 space-y-7">
                                                <div class="flex items-start">
                                                    <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span class="block ml-3 text-base text-gray-900"> 8502 Preston Rd. Inglewood, Maine 98380, USA </span>
                                                </div>

                                                <div class="flex items-start">
                                                    <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <span class="block ml-3 text-base text-gray-900"> saimzaidi110786@gmail.com </span>
                                                </div>

                                                <div class="flex items-start">
                                                    <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        />
                                                    </svg>
                                                    <div class="ml-3">
                                                        <span class="block text-base text-gray-900"> 0333-2133927 </span>
                                                        <span class="block mt-1 text-base text-gray-900"> 0324-1246457 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-8 lg:mt-auto">
                                            <hr class="border-gray-200" />
                                            <div class="flex items-center justify-between mt-7">
                                                <p class="text-lg font-semibold text-black">Follow us on</p>

                                                <ul class="flex items-center justify-end space-x-3">
                                                    <li>
                                                        <a
                                                            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                                                            title="Linkedin"
                                                            class="
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-gray-800
                                                            transition-all
                                                            duration-200
                                                            bg-transparent
                                                            border border-gray-300
                                                            rounded-full
                                                            w-7
                                                            h-7
                                                            focus:bg-blue-600
                                                            hover:text-white
                                                            focus:text-white
                                                            hover:bg-blue-600 hover:border-blue-600
                                                            focus:border-blue-600
                                                        "
                                                        >
                                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23h4V7h-4v16zM8 7h3.6v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4 0 4.7 2.6 4.7 6v10h-4v-9c0-2.2-.8-3.6-2.7-3.6-1.5 0-2.4 1-2.8 2-.1.2-.1.5-.1.8v9.8H8V7z" />

                                                            </svg>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            href="https://www.facebook.com/saim.zaidi.3994"
                                                            title="Facebook"
                                                            class="
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-gray-800
                                                            transition-all
                                                            duration-200
                                                            bg-transparent
                                                            border border-gray-300
                                                            rounded-full
                                                            w-7
                                                            h-7
                                                            focus:bg-blue-600
                                                            hover:text-white
                                                            focus:text-white
                                                            hover:bg-blue-600 hover:border-blue-600
                                                            focus:border-blue-600
                                                        "
                                                        >
                                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                                            </svg>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            href="https://www.instagram.com/saimzaidi1470/"
                                                            title="Instagram"
                                                            class="
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-gray-800
                                                            transition-all
                                                            duration-200
                                                            bg-transparent
                                                            border border-gray-300
                                                            rounded-full
                                                            w-7
                                                            h-7
                                                            focus:bg-blue-600
                                                            hover:text-white
                                                            focus:text-white
                                                            hover:bg-blue-600 hover:border-blue-600
                                                            focus:border-blue-600
                                                        "
                                                        >
                                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                                            </svg>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            href="https://github.com/saimzaidi110"
                                                            title="Github"
                                                            class="
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-gray-800
                                                            transition-all
                                                            duration-200
                                                            bg-transparent
                                                            border border-gray-300
                                                            rounded-full
                                                            w-7
                                                            h-7
                                                            focus:bg-blue-600
                                                            hover:text-white
                                                            focus:text-white
                                                            hover:bg-blue-600 hover:border-blue-600
                                                            focus:border-blue-600
                                                        "
                                                        >
                                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 1.6 3.4 2.2.2-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.4.1-2.8 0 0 1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.2 2.5.1 2.8.7.8 1.2 1.9 1.2 3.2 0 4.7-2.7 5.7-5.3 6 .4.3.7.9.7 1.8v2.7c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterComponent />
        </div>
    )
}
