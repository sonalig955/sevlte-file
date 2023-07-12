import { c as create_ssr_component, b as add_attribute, e as each, d as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm = "";
  let newCardName = "";
  let newCardImage = "";
  const cars = [
    {
      name: "2023 BMW X1 Review",
      image: "https://cdn.jdpower.com/JDP_2023%20BMW%20X1%20X1%20xDrive28i%20Silver%20Front%20Quarter%20View.JPG",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    },
    {
      name: "2023 BMW i7: Choosing the Right Trim",
      image: "https://www.autotrader.com/wp-content/uploads/2023/01/2023-bmw-i7-sedan-xdrive-60-front-profile.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    },
    {
      name: "2023 BMW i5 Electric Sedan",
      image: "https://english.cdn.zeenews.com/sites/default/files/2023/05/30/1209920-bmw-i5-2024-front-3-quarters.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid."
    }
  ];
  let filteredCars = cars;
  return `${$$result.head += `<!-- HEAD_svelte-z8z48p_START -->${$$result.title = `<title>BMW cars</title>`, ""}<meta name="description" content="Bmwcars"><!-- HEAD_svelte-z8z48p_END -->`, ""} <div class="w-full max-h-screen" style="margin-top: -44rem"><h1 class="font-semibold text-4xl" style="position: absolute; left: 24rem; top: 1rem" data-svelte-h="svelte-1n67mea">BMW CARS</h1> <input type="search" placeholder="Search" class="text-base text-black mt-9 w-80 h-10 text-center bg-gray-300 rounded-md cursor-pointer border-y-gray-100 focus:outline-none" style="position: absolute; left: 23rem; margin-top: 2rem;"${add_attribute("value", searchTerm, 0)}>  <div class="grid grid-cols-3 lg:gap-3 justify-items-center mt-10 px-16">${each(filteredCars, (car) => {
    return `<div class="py-10" style="padding-top: 11rem; padding-bottom: 4rem;"><div class="rounded overflow-hidden shadow-lg max-w-sm"><img${add_attribute("src", car.image, 0)}${add_attribute("alt", car.name, 0)} class="w-full"> <div class="px-6 py-4"><div class="font-bold text-xl mb-2">${escape(car.name)}</div> <p class="text-gray-600">${escape(car.description)}</p> </div></div> </div>`;
  })}</div>  <form class="mt-10 px-16"><h2 class="font-semibold text-2xl" data-svelte-h="svelte-1kle1fg">Add a New Card</h2> <div class="flex flex-col"><label for="newCardName" class="text-lg mt-4" data-svelte-h="svelte-qzshf2">Name:</label> <input type="text" id="newCardName" class="h-10 mt-1 px-2 border rounded" required${add_attribute("value", newCardName, 0)}> <label for="newCardImage" class="text-lg mt-4" data-svelte-h="svelte-1jpz8lh">Image URL:</label> <input type="url" id="newCardImage" class="h-10 mt-1 px-2 border rounded" required${add_attribute("value", newCardImage, 0)}> <label for="newCardDescription" class="text-lg mt-4" data-svelte-h="svelte-3cpzo">Description:</label> <textarea id="newCardDescription" class="h-24 mt-1 px-2 border rounded" required>${escape("")}</textarea></div> <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700" data-svelte-h="svelte-rwrtxz">Add Card</button></form></div>`;
});
export {
  Page as default
};
