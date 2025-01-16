import cardImage1 from "./img/pork bone.jpg"
import cardImage2 from "./img/soy sauce.jpeg"
import cardImage3 from "./img/miso.jpeg"
import cardImage4 from "./img/salt.jpg"
import cardImage5 from "./img/oil dry.jpg"
import cardImage6 from "./img/dipping.jpeg"


export function menu() {
    let mainContent = document.querySelector("#content");
    mainContent.innerHTML = `        <div class="grid sm:grid-cols-12 gap-6 p-6 bg-white shadow-lg"> 
            <div class="col-span-12 text-center font-serif font-semibold text-4xl text-gray-900 border-b-4 border-red-500 pb-3">Menu</div>
            <div class="flex col-span-6 items-center gap-4 p-4 bg-white border border-gray-200 transition-transform duration-300 ease-in-out hover:translate-y-[-8px]">
                <div class="w-2/3 grid h-40">
                    <h2 class="font-bold text-2xl text-gray-900 mb-2 pt-2">Pork Bone Ramen</h2>
                    <p class="text-gray-600 text-sm text-wrap w-80">
                        A rich, creamy broth made by boiling pork bones for hours, creating a deep umami flavor.
                    </p>
                    <div class="flex items-center">
                        <span class="text-2xl font-bold"> $15.00</span>
                        <div class="flex space-x-1 items-center text-yellow-500 pt-1 ml-4">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <span class="text-gray-400">(5.0)</span>
                        </div>
                    </div>
                </div>
                <img class="w-40 h-40 rounded-md object-cover " src="${cardImage1}" alt="Pork Bone">
            </div>

            <div class="flex col-span-6 items-center gap-4 p-4 bg-white border border-gray-200 transition-transform duration-300 ease-in-out hover:translate-y-[-8px]">
                <div class="w-2/3 grid h-40">
                    <h2 class="font-bold text-2xl text-gray-900 mb-2 pt-2">Soy Sauce Ramen</h2>
                    <p class="text-gray-600 text-sm text-wrap w-80">
                        A clear, brown broth flavored with soy sauce, offering a savory and slightly tangy taste.
                    </p>
                    <div class="flex items-center">
                        <span class="text-2xl font-bold"> $14.00</span>
                        <div class="flex space-x-1 items-center text-yellow-500 pt-1 ml-4">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <span class="text-gray-400">(5.0)</span>
                        </div>
                    </div>
                </div>
                <img class="w-40 h-40 rounded-md object-cover " src="${cardImage2}" alt="Soy Sauce">
            </div>

            <div class="flex col-span-6 items-center gap-4 p-4 bg-white  border border-gray-200 transition-transform duration-300 ease-in-out hover:translate-y-[-8px]">
                <div class="w-2/3 grid h-40">
                    <h2 class="font-bold text-2xl text-gray-900 mb-2 pt-2">Miso Ramen</h2>
                    <p class="text-gray-600 text-sm text-wrap w-80">
                        A thick, hearty broth made with fermented soybean paste, giving it a bold, slightly sweet, and umami-rich flavor.
                    </p>
                    <div class="flex items-center">
                        <span class="text-2xl font-bold"> $15.00</span>
                        <div class="flex space-x-1 items-center text-yellow-500 pt-1 ml-4">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <span class="text-gray-400">(5.0)</span>
                        </div>
                    </div>
                </div>
                <img class="w-40 h-40 rounded-md object-cover " src="${cardImage3}" alt="Miso">
            </div>

            <div class="flex col-span-6 items-center gap-4 p-4 bg-white border border-gray-200 transition-transform duration-300 ease-in-out hover:translate-y-[-8px]" >
                <div class="w-2/3 grid h-40">
                    <h2 class="font-bold text-2xl text-gray-900 mb-2 pt-2">Salt Ramen</h2>
                    <p class="text-gray-600 text-sm text-wrap w-80">
                        A light, clear broth seasoned primarily with salt, resulting in a delicate and refreshing taste.
                    </p>
                    <div class="flex items-center">
                        <span class="text-2xl font-bold"> $14.00</span>
                        <div class="flex space-x-1 items-center text-yellow-500 pt-1 ml-4">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <span class="text-gray-400">(5.0)</span>
                        </div>
                    </div>
                </div>
                <img class="w-40 h-40 rounded-md object-cover " src="${cardImage4}" alt="Salt">
            </div>

            <div class="flex col-span-6 items-center gap-4 p-4 bg-white border border-gray-200 transition-transform duration-300 ease-in-out hover:translate-y-[-8px]">
                <div class="w-2/3 grid h-40">
                    <h2 class="font-bold text-2xl text-gray-900 mb-2 pt-2">Oil Dry Noodles</h2>
                    <p class="text-gray-600 text-sm text-wrap w-80">
                        Ramen served without broth, tossed in a flavorful soy-based oil sauce with toppings.                    </p>
                    <div class="flex items-center">
                        <span class="text-2xl font-bold"> $13.00</span>
                        <div class="flex space-x-1 items-center text-yellow-500 pt-1 ml-4">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <span class="text-gray-400">(5.0)</span>
                        </div>
                    </div>
                </div>
                <img class="w-40 h-40 rounded-md object-cover " src="${cardImage5}" alt="Oil Dry">
            </div>

            <div class="flex col-span-6 items-center gap-4 p-4 bg-white border border-gray-200 transition-transform duration-300 ease-in-out hover:translate-y-[-8px]">
                <div class="w-2/3 grid h-40">
                    <h2 class="font-bold text-2xl text-gray-900 mb-2 pt-2">Dipping Noodles</h2>
                    <p class="text-gray-600 text-sm text-wrap w-80">
                        Thick, chewy noodles served separately and dipped into a concentrated, flavorful broth before eating.
                    </p>
                    <div class="flex items-center">
                        <span class="text-2xl font-bold"> $16.00</span>
                        <div class="flex space-x-1 items-center text-yellow-500 pt-1 ml-4">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 12.6,7.1 19,7.3 14,11.6 15.8,18 10,14.5 4.2,18 6,11.6 1,7.3 7.4,7.1"/>
                            </svg>
                            <span class="text-gray-400">(5.0)</span>
                        </div>
                    </div>
                </div>
                <img class="w-40 h-40 rounded-md object-cover " src="${cardImage6}" alt="Dipping">
            </div>
        </div>`;
}