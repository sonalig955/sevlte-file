<script>
	import { writable } from 'svelte/store';
  
	let searchTerm = '';
	let newCardName = '';
	let newCardImage = '';
	let newCardDescription = '';
  
	const cars = [
	  {
		name: "TATA NEXON",
		image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=75",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid.",
	  },
	  {
		name: "Maruti Suzuki Brezza",
		image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/107543/vitara-brezza-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid.",
	  },
	  {
		name: "Toyota Innova Crysta",
		image: "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid.",
	  },
	  {
		name: "Honda City",
		image: "https://imgd.aeplcdn.com/1280x720/cw/ec/30487/Honda-City-Exterior-104913.jpg?wm=0",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem magni porro tempore error aut officia! Rem inventore cumque necessitatibus, facere fuga aliquid.",
	  },
	  {
		name: "Hyundai Creta",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg/1200px-2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg",
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
	<title>Top 5 cars</title>
	<meta name="description" content="top5cars" />
</svelte:head>
  
  <div class="w-full max-h-screen" style="margin-top: -44rem">
	<h1 class="font-semibold text-4xl" style="position: absolute; left: 24rem; top: 1rem">TOP 5 CARS</h1>
	<input
	  id="search"
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
  


  <style>
	@media only screen and (max-width: 1458px) and (min-width: 940px){
		#search{
			left: 21rem;
    margin-top: -7rem;
		}
	}
  </style>