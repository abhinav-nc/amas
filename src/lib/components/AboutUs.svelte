<script>
	import AboutUsCard from './AboutUsCard.svelte';
	const cards = [
		{
			number: '15',
			text: 'Years of Experience'
		},
		{
			number: '200',
			text: 'Expeditions Led'
		},
		{
			number: '3000',
			text: 'Happy Trekkers'
		},
		{
			number: '50',
			text: 'Destinations'
		}
	];
</script>

<div class="about-container" id="aboutus">
	<div class="content">
		<div class="heading">
			<p>ABOUT US</p>
			<h3>Crafting <span>Unforgettable</span> <br /> Adventures</h3>
		</div>

		<div class="text">
			<p>
				Founded by passionate mountaineers, Trekking Vibes has been leading extraordinary
				expeditions across the globe for over 15 years. We believe that the journey is as important
				as the destination.
			</p>
			<p>
				Our team consists of certified mountain guides, wilderness first responders, and adventure
				enthusiasts who share a common goal: to provide safe, sustainable, and soul-stirring
				experiences in nature's most spectacular settings.
			</p>
			<p>
				From the towering peaks of the Himalayas to the rugged beauty of Patagonia, we craft
				journeys that challenge, inspire, and transform.
			</p>
		</div>
	</div>

	<div class="cards-container">
		{#each cards as card}
			<AboutUsCard number={card.number} text={card.text} />
		{/each}
	</div>
</div>

<style>
	.about-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 3.375rem;
		align-items: center;
		background-color: rgb(0, 0, 0);
		padding: 5rem 1.5rem;
		font-family: inter, sans-serif;

		.heading {
			width: 100%;
			margin-bottom: 2rem;
			p {
				letter-spacing: 3.6px;
				margin-bottom: 1.5rem;
				font-size: 0.75rem;
				color: rgb(166, 166, 166);
				margin-bottom: 1rem;
			}
			h3 {
				color: rgb(255, 255, 255);
				font-size: 2rem;
				font-weight: 300;
				letter-spacing: -0.75px;
				line-height: 32px;

				span {
					color: rgb(236, 19, 19);
				}
			}
		}

		.text {
			color: rgb(166, 166, 166);
			font-size: 1rem;
			line-height: 26px;

			p:not(:first-child) {
				margin-top: 1.5rem;
			}
		}

		.cards-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}

	@media (min-width:768px) {
		.about-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 3.375rem;
		align-items: center;
		background-color: rgb(0, 0, 0);
		padding: 5rem 3rem;
		font-family: inter, sans-serif;

		.heading {
			width: 100%;
			margin-bottom: 2rem;
			p {
				letter-spacing: 3.6px;
				margin-bottom: 1.5rem;
				font-size: 0.75rem;
				line-height: 16px;
				font-weight: 500;
				color: rgb(166, 166, 166);
				margin-bottom: 1rem;
			}
			h3 {
				color: rgb(255, 255, 255);
				font-size: 3rem;
				font-weight: 300;
				letter-spacing: -1.2px;
				line-height: 48px;

				span {
					color: rgb(236, 19, 19);
				}
			}
		}

		.text {
			color: rgb(166, 166, 166);
			font-size: 1rem;
			line-height: 26px;
			font-weight: 400;

			p:not(:first-child) {
				margin-top: 1.5rem;
			}
		}

		.cards-container {
			display: grid;
			width: 100%;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}
	}

	@media (min-width:1024px){
		.about-container{
			padding-inline: 6rem;
			display: flex;
			flex-direction: row;
			gap:6rem;

		}
	}
</style>
