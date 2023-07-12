import { c as create_ssr_component, b as add_attribute, e as each, d as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media only screen and (max-width: 1458px) and (min-width: 940px){#search.svelte-1ayafsa{left:21rem;margin-top:-7rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm = "";
  let newCardName = "";
  let newCardImage = "";
  const cars = [
    {
      name: "TATA NEXON",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=75",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    },
    {
      name: "Maruti Suzuki Brezza",
      image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/107543/vitara-brezza-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    },
    {
      name: "Toyota Innova Crysta",
      image: "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    },
    {
      name: "Honda City",
      image: "https://imgd.aeplcdn.com/1280x720/cw/ec/30487/Honda-City-Exterior-104913.jpg?wm=0",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    },
    {
      name: "Hyundai Creta",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg/1200px-2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    }
  ];
  let filteredCars = cars;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1t6pmgh_START -->${$$result.title = `<title>Top 5 cars</title>`, ""}<meta name="description" content="top5cars"><!-- HEAD_svelte-1t6pmgh_END -->`, ""} <div class="w-full max-h-screen" style="margin-top: -44rem"><h1 class="font-semibold text-4xl" style="position: absolute; left: 24rem; top: 1rem" data-svelte-h="svelte-kq8uuk">TOP 5 CARS</h1> <input id="search" type="search" placeholder="Search" class="text-base text-black mt-9 w-80 h-10 text-center bg-gray-300 rounded-md cursor-pointer border-y-gray-100 focus:outline-none svelte-1ayafsa" style="position: absolute; left: 24rem; margin-top: 2rem;"${add_attribute("value", searchTerm, 0)}>  <div class="grid grid-cols-3 lg:gap-3 justify-items-center mt-10 px-16">${each(filteredCars, (car) => {
    return `<div class="py-10" style="padding-top: 11rem; padding-bottom: 4rem;"><div class="rounded overflow-hidden shadow-lg max-w-sm"><img${add_attribute("src", car.image, 0)}${add_attribute("alt", car.name, 0)} class="w-full"> <div class="px-6 py-4"><div class="font-bold text-xl mb-2">${escape(car.name)}</div> <p class="text-gray-600">${escape(car.description)}</p> </div></div> </div>`;
  })}</div>  <form class="mt-10 px-16"><h2 class="font-semibold text-2xl" data-svelte-h="svelte-1kle1fg">Add a New Card</h2> <div class="flex flex-col"><label for="newCardName" class="text-lg mt-4" data-svelte-h="svelte-qzshf2">Name:</label> <input type="text" id="newCardName" class="h-10 mt-1 px-2 border rounded" required${add_attribute("value", newCardName, 0)}> <label for="newCardImage" class="text-lg mt-4" data-svelte-h="svelte-1jpz8lh">Image URL:</label> <input type="url" id="newCardImage" class="h-10 mt-1 px-2 border rounded" required${add_attribute("value", newCardImage, 0)}> <label for="newCardDescription" class="text-lg mt-4" data-svelte-h="svelte-3cpzo">Description:</label> <textarea id="newCardDescription" class="h-24 mt-1 px-2 border rounded" required>${escape("")}</textarea></div> <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700" data-svelte-h="svelte-rwrtxz">Add Card</button></form> </div>`;
});
export {
  Page as default
};
