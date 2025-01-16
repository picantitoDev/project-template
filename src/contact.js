
export function contactUs() {
    let mainContent = document.querySelector("#content");
    mainContent.innerHTML = `<div
            class="grid grid-cols-1 sm:grid-cols-2 rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <!-- Sección de Información -->
            <div class="flex flex-col space-y-3 p-4">
                <h1 class="font-extrabold text-3xl text-orange-600 border-b-4 border-orange-500 pb-2">Our Location</h1>
                <p class="text-lg text-gray-700">📍 Av. América Sur 3145, Trujillo 13008</p>
                <p class="text-lg text-gray-700">📞 +51 953 889 070</p>

                <div class="pt-12">
                    <h2 class="text-lg font-semibold text-orange-600 pb-2">Receive Our Newsletter!</h2>
                    <div class="flex gap-3">
                        <input class="bg-white border-2 rounded-lg pl-2" type="email" placeholder="address@email.com">
                        <button class="bg-orange-700 rounded-lg w-20 text-white font-bold p-1">Send</button>
                    </div>
                </div>
            </div>

            <!-- Mapa -->
            <div class="rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.5425763009407!2d-79.03366961447345!3d-8.125689995476561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d6fc22bad99%3A0x9c81b5d832c8370!2sAntenor%20Orrego%20Private%20University!5e0!3m2!1sen!2spe!4v1737002907730!5m2!1sen!2spe"
                    width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>`;
}