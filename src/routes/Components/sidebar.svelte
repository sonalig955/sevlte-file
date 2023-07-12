<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  

 

  interface Card {
    id: number;
    title: string;
    description: string;
    link?: string;
  }

  // Dummy data
  let data1: Card[] = [
    {id: 1, title: 'Page2', description: ' ', link: '/Page2'},
    { id: 2, title: 'BMW', description: 'Description 1', link: '/cardbmw' },
    { id: 3, title: 'General Motors', description: 'Description 2', link: '/cardGMC' },
    { id: 4, title: 'Renault', description: 'Description 3', link: '/cardRenault' }
  ];

//   let storedData = sessionStorage.getItem('data1');
// if (storedData) {
//   data1 = JSON.parse(storedData);
// }




  let open = true;

  function toggleOpen() {
    open = !open;
  };

  let selectedMenu: Card | null = null;

  function handleMenuClick(menu: Card): void {
    selectedMenu = menu;
  }

  onMount(() => {
    // Perform any necessary initialization here
    // sessionStorage.setItem('data1', JSON.stringify(data1));
  });

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      toggleOpen();
    }
  }

  const filter = writable('');
  let filteredData: Card[] = [];

  $: {
    filteredData = data1.filter((item) => item.title.toLowerCase().includes($filter.toLowerCase()));
  }

  let searchValue = '';
  let titleInput: HTMLInputElement;
  let descriptionInput: HTMLInputElement;

  function handleSearch() {
    filter.set(searchValue);
  }

  function handleAddCard() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title) {
      const newCard: Card = {
        id: data1.length + 1,
        title,
        description
      };
      data1 = [...data1, newCard];
      filter.set('');
      titleInput.value = '';
      descriptionInput.value = '';
    }
  }
</script>

<div class="flex">
  <div
    role="button"
    aria-label="Toggle"
    class={`bg-purple h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-400 relative`}
    on:click={toggleOpen}
    on:keydown={handleKeydown}
    tabindex="0"
  >
    <div
      class={`bg-white text-purple text-3xl rounded-full absolute -right-3 top-9 border border-purple cursor-pointer ${
        !open && 'rotate-180'
      }`}
    >
      &larr;
    </div>

    <div class="inline-flex">
      
      
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class={`bg-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
          open && 'rotate-[360deg]'
        }`}
        on:click|stopPropagation
      >
        &#x1F50E;&#xFE0E;
      </div>
      <form
        class={`flex text-white origin-left font-medium text-2xl duration-300 ${
          !open && 'scale-0'
        }`}
      >
        <input
          type="search"
          placeholder="Search"
          class="text-base text-white w-full h-10 bg-gray-600 rounded-md cursor-pointer border-y-gray-100 focus:outline-none"
          on:click|stopPropagation
          bind:value={searchValue}
          on:input={handleSearch}
        />
      </form>
    </div>
     <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->

    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <ul class="pt-2">
      {#each filteredData as menu (menu.id)}
        <li
          class="text-gray-300 text-sm items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 rounded-md mt-2"
        >
          <span class="text-2xl block float-left">&#128203;</span>
          <a
            href={menu.link}
            class={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}
          >
            {menu.title}
          </a>
          <p class={`text-base font-medium duration-200 ${!open && 'hidden'}`}>
            {menu.description}
          </p>
        </li>
      {/each}
    </ul>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="mb-4 mt-5" on:click|stopPropagation>
      <span class="text-2xl block ml-3 text-white">T</span>
      <input
        type="text"
        placeholder="Title"
        class={`w-full px-4 py-2 border border-gray-300 rounded ml-2 ${!open && 'hidden'}`}
        bind:this={titleInput}
      />
    </div>
  
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="mb-4" on:click|stopPropagation>
      <span class="text-2xl block ml-3 float-left text-white">D</span>
      <input
        type="text"
        placeholder="Description"
        class={`w-full px-4 py-2 border border-gray-300 rounded ml-2 ${!open && 'hidden'}`}
        bind:this={descriptionInput}
      />
    </div>

    <button
      class={`bg-blue-500 text-white px-4 py-2 rounded ${!open && 'hidden'}`}
      on:click={handleAddCard}
      on:click|stopPropagation
    >
      Add Card
    </button>
  </div>
  <div class="p-7 flex-1">
   
    
  
</div>
</div>