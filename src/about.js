import chef from "./img/chefsito.png"

export function about() {
    let mainContent = document.querySelector("#content");
    mainContent.innerHTML = ` <div class="grid sm:grid-cols-12 h-[calc(100vh-64px)] w-[calc(100vw-24rem)] py-24 gap-8">
            <!-- Left Section: Image -->
            <div class="col-span-4 bg-white rounded-tl-2xl rounded-bl-2xl flex justify-center items-center shadow-lg">
                <img src="${chef}" alt="Chef Image" class="rounded-lg">
            </div>
        
            <!-- Right Section: Content -->
            <div class=" col-span-8 bg-gray-50 text-gray-900 rounded-tr-2xl rounded-br-2xl shadow-lg">
                <div class="px-6 py-4">
                    <h2 class="text-3xl font-semibold mb-4 border-orange-600 border-b-4 pb-2">Who Are We?</h2>
                    <p class="text-lg leading-relaxed">At our Ramen Shop, we are passionate about bringing the authentic taste of Japan to your table. Our journey began with a love for ramen and a desire to share this delicious tradition with the local community. We believe in using the freshest ingredients and crafting each bowl with care and precision, just like the way it's done in the heart of Japan.</p>
                </div>
        
                <div class="px-6 py-4">
                    <h2 class="text-3xl font-semibold mb-4 border-orange-600 border-b-4 pb-2">What We Do</h2>
                    <p class="text-lg leading-relaxed">We specialize in creating rich, flavorful ramen bowls that combine the perfect balance of savory broths, tender noodles, and high-quality toppings. Whether you prefer a classic Shoyu, a creamy Tonkotsu, or a spicy Miso, our menu has something to satisfy every ramen lover’s cravings. Our commitment to quality and authenticity is what makes us stand out, and we’re proud to serve up a taste of Japan in every bowl.</p>
                </div>
        
                <div class="px-6 py-4">
                    <h2 class="text-3xl font-semibold mb-4 border-orange-600 border-b-4 pb-2">Our Values</h2>
                    <ul class="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Fresh Ingredients:</strong> We carefully select the best ingredients to ensure every bite bursts with flavor.</li>
                        <li><strong>Authenticity:</strong> We stay true to the traditions of Japanese ramen while infusing our unique twist.</li>
                        <li><strong>Community:</strong> Our customers are our family, and we are dedicated to creating a warm, welcoming environment for all.</li>
                    </ul>
                </div>
        
                <div class="px-6 py-4">
                    <p class="text-lg leading-relaxed">Come visit us, and experience the soul-warming comfort of a perfect bowl of ramen.</p>
                </div>
            </div>
        </div>        
`;
}