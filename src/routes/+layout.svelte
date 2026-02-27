<script>
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar/>
<main class="main-content">
	{@render children()}
</main>

<style>
	.main-content {
		padding-top: 56px;
	}
</style>
