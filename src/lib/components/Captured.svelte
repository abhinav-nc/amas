<script>
	import CaptureCard from './CaptureCard.svelte';

	const cards = [
		{
			location: 'Nepal',
			title: 'Everest Sunrise',
			image: '/trek-everest.jpg'
		},
		{
			location: 'Nepal',
			title: 'Thorong La Pass',
			image: '/trek-annapurna.jpg'
		},
		{
			location: 'Patagonia',
			title: 'Grey Glacier',
			image: '/trek-patagonia.jpg'
		},
		{
			location: 'Tanzania',
			title: 'Uhuru Peak',
			image: '/trek-kilimanjaro.jpg'
		}
	];
</script>

<div class="container" id="gallery">

	<div class="heading">
		<p>GALLERY</p>
		<h3>Captured <span>Moments</span></h3>
	</div>

	<div class="cards">
		{#each cards as card}
			<CaptureCard
				location={card.location}
				title={card.title}
				image={card.image}
			/>
		{/each}
	</div>

</div>

<style>


.container {
	width: 100%;
	padding: 5rem 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: black;
	font-family: inter, sans-serif;
}


.heading {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	margin-bottom: 4rem;
}

.heading p {
	font-size: 0.75rem;
	font-weight: 500;
	letter-spacing: 3.6px;
	color: rgb(166, 166, 166);
}

.heading h3 {
	font-size: 1.875rem;
	font-weight: 300;
	line-height: 36px;
	color: white;
}

.heading span {
	color: rgb(236, 19, 19);
}



.cards {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
}




@media (min-width: 768px) {

	.container {
		padding: 5rem 3rem;
	}

	.heading h3 {
		font-size: 3rem;
		line-height: 48px;
	}

	.cards {
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}
}



@media (min-width: 1024px) {

	.container {
		padding-inline: 6rem;
	}

	.cards {
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>