<script>
	import { writable } from 'svelte/store';
  
	let searchTerm = '';
	let newCardName = '';
	let newCardImage = '';
	let newCardDescription = '';
  
	const cars = [
	  {
		name: "Renault Cars: List of All New Renault Cars Models in India - carandbike",
		image: "https://images.carandbike.com/car-images/gallery/renault/kiger/exterior/renault-kiger-grill.jpg?v=2021-02-22",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid.",
	  },
	  {
		name: "Renault Kwid",
		image: "https://imgd.aeplcdn.com/0x0/n/cw/ec/48543/kwid-exterior-right-front-three-quarter-18.jpeg?isig=0",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid.",
	  },
	  {
		name: "Renault Triber Price",
		image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/10070/1683262769249/front-left-side-47.jpg?imwidth=420&impolicy=resize",
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
	<title>Renault</title>
	<meta name="description" content="Renault" />
</svelte:head>
  
  <div class="w-full max-h-screen" style="margin-top: -44rem">
	<h1 class="font-semibold text-4xl" style="position: absolute; left: 24rem; top: 1rem">RENAULT CARS</h1>
	<input
	  type="search"
	  placeholder="Search"
	  class="text-base text-black mt-9 w-80 h-10 text-center bg-gray-300 rounded-md cursor-pointer border-y-gray-100 focus:outline-none"
	  style="position: absolute; left: 23rem; margin-top: 2rem;"
	  bind:value={searchTerm}
	  on:input={updateFilteredCars}
	/>
</div>
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
	  <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add Card</button>
	</form>
  
  