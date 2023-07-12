<script>
	import { writable } from 'svelte/store';
  
	let searchTerm = '';
	let newCardName = '';
	let newCardImage = '';
	let newCardDescription = '';
  
	const cars = [
	  {
		name: "'Chevrolet FNR'",
		image: "https://www.thedrive.com/content/2018/10/chevy-fnr-hero.jpg?quality=85&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid.",
	  },
	  {
		name: "Future Car Flashback: General Motors EV1",
		image: "https://cimg1.ibsrv.net/ibimg/hgm/400x225-1/100/001/1999_gm_specialty_vehicles_ev1_100001629.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid.",
	  },
	  {
		name: "Caddy's big, new flagship named CT6",
		image: "https://www.usatoday.com/gcdn/-mm-/876a6f0c2b8cf7d66294ad4af79934dc05387019/c=0-252-3000-1944/local/-/media/USATODAY/USATODAY/2014/09/19/1411155182000-XXX-CadillacElmirajConceptReveal04jpg-APS-APS3390.jpg?width=3000&height=1692&fit=crop&format=pjpg&auto=webp",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid.",
	  },
	];
  
	let filteredCars = cars;
  
	function updateFilteredCars() {
	  filteredCars = cars.filter((car) =>
		car.name.toLowerCase().includes(searchTerm.toLowerCase())
	  );
	}
  
	function addCard() {
	  if (newCardName && newCardImage && newCardDescription) {
		const newCard = {
		  name: newCardName,
		  image: newCardImage,
		  description: newCardDescription,
		};
		cars.push(newCard);
		updateFilteredCars();
		newCardName = '';
		newCardImage = '';
		newCardDescription = '';
	  }
	}
  </script>
  <svelte:head>
	<title>GMC</title>
	<meta name="description" content="GMC" />
</svelte:head>
  
  <div class="w-full max-h-screen" style="margin-top: -44rem">
	<h1 class="font-semibold text-4xl" style="position: absolute; left: 24rem; top: 1rem">GENERAL MOTORS CARS</h1>
	<input
	  type="search"
	  placeholder="Search"
	  class="text-base text-black mt-9 w-80 h-10 text-center bg-gray-300 rounded-md cursor-pointer border-y-gray-100 focus:outline-none"
	  style="position: absolute; left: 24rem; margin-top: 2rem;"
	  bind:value={searchTerm}
	  on:input={updateFilteredCars}
	/>
  
	<!-- card section -->
	<div class="grid grid-cols-3 lg:gap-3 justify-items-center mt-10 px-16">
	  {#each filteredCars as car (car.name)}
		<div class="py-10" style="padding-top: 11rem; padding-bottom: 4rem;">
		  <div class="rounded overflow-hidden shadow-lg max-w-sm">
			<img src={car.image} alt={car.name} class="w-full" />
			<div class="px-6 py-4">
			  <div class="font-bold text-xl mb-2">{car.name}</div>
			  <p class="text-gray-600">{car.description}</p>
			</div>
		  </div>
		</div>
	  {/each}
	</div>
  
	<!-- add card form -->
	<form on:submit|preventDefault={addCard} class="mt-10 px-16">
	  <h2 class="font-semibold text-2xl">Add a New Card</h2>
	  <div class="flex flex-col">
		<label for="newCardName" class="text-lg mt-4">Name:</label>
		<input type="text" id="newCardName" class="h-10 mt-1 px-2 border rounded" bind:value={newCardName} required />
  
		<label for="newCardImage" class="text-lg mt-4">Image URL:</label>
		<input type="url" id="newCardImage" class="h-10 mt-1 px-2 border rounded" bind:value={newCardImage} required />
  
		<label for="newCardDescription" class="text-lg mt-4">Description:</label>
		<textarea id="newCardDescription" class="h-24 mt-1 px-2 border rounded" bind:value={newCardDescription} required></textarea>
	  </div>
	  <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700">Add Card</button>
	</form>
  </div>
  