import { c as create_ssr_component, b as add_attribute, e as each, d as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm = "";
  let newCardName = "";
  let newCardImage = "";
  const cars = [
    {
      name: "'Chevrolet FNR'",
      image: "https://www.thedrive.com/content/2018/10/chevy-fnr-hero.jpg?quality=85&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    },
    {
      name: "Future Car Flashback: General Motors EV1",
      image: "https://cimg1.ibsrv.net/ibimg/hgm/400x225-1/100/001/1999_gm_specialty_vehicles_ev1_100001629.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    },
    {
      name: "Caddy's big, new flagship named CT6",
      image: "https://www.usatoday.com/gcdn/-mm-/876a6f0c2b8cf7d66294ad4af79934dc05387019/c=0-252-3000-1944/local/-/media/USATODAY/USATODAY/2014/09/19/1411155182000-XXX-CadillacElmirajConceptReveal04jpg-APS-APS3390.jpg?width=3000&height=1692&fit=crop&format=pjpg&auto=webp",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    }
  ];
  let filteredCars = cars;
  return `${$$result.head += `<!-- HEAD_svelte-1coe2zb_START -->${$$result.title = `<title>GMC</title>`, ""}<meta name="description" content="GMC"><!-- HEAD_svelte-1coe2zb_END -->`, ""} <div class="w-full max-h-screen" style="margin-top: -44rem"><h1 class="font-semibold text-4xl" style="position: absolute; left: 24rem; top: 1rem" data-svelte-h="svelte-1wu13b6">GENERAL MOTORS CARS</h1> <input type="search" placeholder="Search" class="text-base text-black mt-9 w-80 h-10 text-center bg-gray-300 rounded-md cursor-pointer border-y-gray-100 focus:outline-none" style="position: absolute; left: 24rem; margin-top: 2rem;"${add_attribute("value", searchTerm, 0)}>  <div class="grid grid-cols-3 lg:gap-3 justify-items-center mt-10 px-16">${each(filteredCars, (car) => {
    return `<div class="py-10" style="padding-top: 11rem; padding-bottom: 4rem;"><div class="rounded overflow-hidden shadow-lg max-w-sm"><img${add_attribute("src", car.image, 0)}${add_attribute("alt", car.name, 0)} class="w-full"> <div class="px-6 py-4"><div class="font-bold text-xl mb-2">${escape(car.name)}</div> <p class="text-gray-600">${escape(car.description)}</p> </div></div> </div>`;
  })}</div>  <form class="mt-10 px-16"><h2 class="font-semibold text-2xl" data-svelte-h="svelte-1kle1fg">Add a New Card</h2> <div class="flex flex-col"><label for="newCardName" class="text-lg mt-4" data-svelte-h="svelte-qzshf2">Name:</label> <input type="text" id="newCardName" class="h-10 mt-1 px-2 border rounded" required${add_attribute("value", newCardName, 0)}> <label for="newCardImage" class="text-lg mt-4" data-svelte-h="svelte-1jpz8lh">Image URL:</label> <input type="url" id="newCardImage" class="h-10 mt-1 px-2 border rounded" required${add_attribute("value", newCardImage, 0)}> <label for="newCardDescription" class="text-lg mt-4" data-svelte-h="svelte-3cpzo">Description:</label> <textarea id="newCardDescription" class="h-24 mt-1 px-2 border rounded" required>${escape("")}</textarea></div> <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700" data-svelte-h="svelte-rwrtxz">Add Card</button></form></div>`;
});
export {
  Page as default
};
