<script>
	import AdventureCard from './AdventureCard.svelte';

	const cards=[
		{
			image: '/trek-everest.jpg',
			location: 'Nepal',
			duration: '14 Days',
			title: 'Everest Base Camp',
			price: '3,500$',
			difficulty: 'Challenging',
			amenities: ['Expert guides', 'All meals included', 'Permits & fees', 'Luxury lodges']
		},
		{
			image: '/trek-annapurna.jpg',
			location: 'Nepal',
			duration: '18 Days',
			title: 'Annapurna Circuit',
			price: '2,800$',
			difficulty: 'Moderate',
			amenities: ['Cultural immersion', 'Tea house stays', 'Thorong La Pass', 'Hot springs']
		},
		{
			image: '/trek-patagonia.jpg',
			location: 'Patagonia',
			duration: '10 Days',
			title: 'Torres del Paine',
			price: '4,200$',
			difficulty: 'Moderate',
			amenities: ['Glacier trekking','Wildlife viewing','Premium camping','Photography guide']
		},
		{
			image: '/trek-kilimanjaro.jpg',
			location: 'Tanzania',
			duration: '8 Days',
			title: 'Kilimanjaro Summit',
			price: '3,900$',
			difficulty: 'Challenging',
			amenities: ['Machame route','Summit night','Safari option','medical support']
		}	

	]
</script>

<div class="adventure-wrapper" id="adventures">
	<div class="adventure-text">
		<p>OUR EXPEDITIONS</p>
		<h3>Curated <span>Adventures</span></h3>
	</div>

	<div class="adventure-cards">
		{#each cards as card}
		<AdventureCard
			image={card.image}
			location={card.location}
			duration={card.duration}
			title={card.title}
			price={card.price}
			difficulty={card.difficulty}
			amenities={card.amenities}
		/>
		{/each}
	</div>
</div>

<style>
	.adventure-wrapper {
		width: 100%;
		/* height: 100vh; */
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgb(0, 0, 0);
		padding: 5rem 1.5rem;
		font-family: inter, sans-serif;

		.adventure-text {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: start;
			margin-bottom: 4rem;

			p {
				letter-spacing: 3.6px;
				margin-bottom: 1.5rem;
				font-size: 0.75rem;
				color: rgb(166, 166, 166);
				margin-bottom: 1rem;
			}

			h3 {
				font-size: 2rem;
				font-weight: 300;
				letter-spacing: -0.75px;
				color: rgb(255, 255, 255);
				line-height: 36px;
			}

			span {
				color: rgb(236, 19, 19);
			}
		}

		.adventure-cards {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}
	}

	@media (min-width:768px){
		.adventure-wrapper {
		width: 100%;
		/* height: 100vh; */
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgb(0, 0, 0);
		padding: 5rem 3rem;
		font-family: inter, sans-serif;

		.adventure-text {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: start;
			margin-bottom: 4rem;

			p {
				letter-spacing: 3.6px;
				margin-bottom: 1.5rem;
				font-size: 0.75rem;
				color: rgb(166, 166, 166);
				margin-bottom: 1rem;
			}

			h3 {
				font-size: 3rem;
				font-weight: 300;
				letter-spacing: -1.2px;
				color: rgb(255, 255, 255);
				line-height: 48px;
			}

			span {
				color: rgb(236, 19, 19);
			}
		}

		.adventure-cards {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
	}

	}

	@media (min-width:1024px){
		.adventure-wrapper{
			padding-inline: 6rem;
		}
	}
</style>
