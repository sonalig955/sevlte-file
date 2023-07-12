import { c as create_ssr_component, a as subscribe, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
const styles = "";
const app = "";
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $filter, $$unsubscribe_filter;
  let data1 = [
    {
      id: 1,
      title: "Page2",
      description: " ",
      link: "/Page2"
    },
    {
      id: 2,
      title: "BMW",
      description: "Description 1",
      link: "/cardbmw"
    },
    {
      id: 3,
      title: "General Motors",
      description: "Description 2",
      link: "/cardGMC"
    },
    {
      id: 4,
      title: "Renault",
      description: "Description 3",
      link: "/cardRenault"
    }
  ];
  let open = true;
  const filter = writable("");
  $$unsubscribe_filter = subscribe(filter, (value) => $filter = value);
  let filteredData = [];
  let searchValue = "";
  let titleInput;
  let descriptionInput;
  {
    {
      filteredData = data1.filter((item) => item.title.toLowerCase().includes($filter.toLowerCase()));
    }
  }
  $$unsubscribe_filter();
  return `<div class="flex"><div role="button" aria-label="Toggle"${add_attribute("class", `bg-purple h-screen p-5 pt-8 ${"w-72"} duration-400 relative`, 0)} tabindex="0"><div${add_attribute("class", `bg-white text-purple text-3xl rounded-full absolute -right-3 top-9 border border-purple cursor-pointer ${!open}`, 0)}>←</div> <div class="inline-flex">  <div${add_attribute("class", `bg-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${"rotate-[360deg]"}`, 0)}>🔎︎</div> <form${add_attribute("class", `flex text-white origin-left font-medium text-2xl duration-300 ${!open}`, 0)}><input type="search" placeholder="Search" class="text-base text-white w-full h-10 bg-gray-600 rounded-md cursor-pointer border-y-gray-100 focus:outline-none"${add_attribute("value", searchValue, 0)}></form></div>    <ul class="pt-2">${each(filteredData, (menu) => {
    return `<li class="text-gray-300 text-sm items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 rounded-md mt-2"><span class="text-2xl block float-left" data-svelte-h="svelte-r2f756">📋</span> <a${add_attribute("href", menu.link, 0)}${add_attribute("class", `text-base font-medium flex-1 duration-200 ${!open}`, 0)}>${escape(menu.title)}</a> <p${add_attribute("class", `text-base font-medium duration-200 ${!open}`, 0)}>${escape(menu.description)}</p> </li>`;
  })}</ul>   <div class="mb-4 mt-5"><span class="text-2xl block ml-3 text-white" data-svelte-h="svelte-477lu6">T</span> <input type="text" placeholder="Title"${add_attribute("class", `w-full px-4 py-2 border border-gray-300 rounded ml-2 ${!open}`, 0)}${add_attribute("this", titleInput, 0)}></div>   <div class="mb-4"><span class="text-2xl block ml-3 float-left text-white" data-svelte-h="svelte-1v9fhqk">D</span> <input type="text" placeholder="Description"${add_attribute("class", `w-full px-4 py-2 border border-gray-300 rounded ml-2 ${!open}`, 0)}${add_attribute("this", descriptionInput, 0)}></div> <button${add_attribute("class", `bg-blue-500 text-white px-4 py-2 rounded ${!open}`, 0)}>Add Card</button></div> <div class="p-7 flex-1" data-svelte-h="svelte-19zxzi4"></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
