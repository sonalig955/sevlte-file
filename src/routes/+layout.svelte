<script>
	
	import './styles.css';
	import "../app.css";
	// @ts-ignore
	import Sidebar from './Components/sidebar.svelte';
	
</script>


<div class="app">
	<Sidebar/>
	
	
	<main>
		<slot />
	</main>

	
</div>

