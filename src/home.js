import ramenImage from "./img/rb_2151172098.png";

export function home() {
    let mainContent = document.querySelector("#content");
    mainContent.innerHTML = `        <div class="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
            <!-- Text Section -->
            <div class="mb-14 lg:mb-0 lg:w-1/2 text-center lg:text-left">
              <h1 class="max-w-xl text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                A Bowl of Love from <br><span class="text-red-500">Japanese Cuisine</span> <br>For You
              </h1>
              <p class="max-w-xl text-gray-500 text-lg lg:text-left lg:max-w-md mb-6">
                Ramen is a traditional Japanese noodle soup. It consists of Chinese wheat noodles served in a meat or 
                fish-based broth & uses toppings such as sliced pork, nori, menma, and scallions.
              </p>
              <div class="flex justify-center lg:justify-start">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition transform hover:scale-105 mb-5 w-full sm:w-auto">
                  Order Now
                </button>
              </div>
            </div>
            <!-- Image Section -->
            <div class="lg:w-1/2 mt-8 lg:mt-0">
              <img class="w-full rounded-xl" src="${ramenImage}" alt="Ramen">
            </div>
          </div>`;
}