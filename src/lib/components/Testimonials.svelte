<script>
	import TestimonialCard from './TestimonialCard.svelte';
	import { Compass, Users, Shield, Sparkles } from '@lucide/svelte';
	const cards = [
		{
			name: 'Sarah Johnson',
			role: 'Adventure Enthusiast',
			quote:
				'The Everest Base Camp trek with Trekking Vibes was life-changing. The guides were exceptional, and every detail was perfectly planned.',
		},
		{
			name: 'Michael Lee',
			role: 'Nature Lover',
			quote:
				'Trekking Vibes made my dream of exploring the Himalayas a reality. The experience was unforgettable, and I can\'t wait to book my next trek with them!',
		},
		{
			name: 'Emily Davis',
			role: 'Solo Traveler',
			quote:
				'As a solo traveler, I felt completely safe and supported throughout my trek with Trekking Vibes. The camaraderie among trekkers was amazing!',
		},
	];
</script>

<div class="testimonials-wrapper" id="testimonials">
	<div class="heading">
		<p>TESTIMONIALS</p>
		<h3>What <span>Trekkers</span> Say</h3>
	</div>

	<div class="cards-wrapper">
		{#each cards as card (card.name)}
			<TestimonialCard
				name={card.name}
				role={card.role}
				quote={card.quote}
			/>
		{/each}
		
	</div>
</div>

<style>
	.testimonials-wrapper {
		width: 100%;
		padding: 5rem 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		background-color: rgb(0, 0, 0);
		font-family: inter, sans-serif;

		.heading {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			margin-bottom: 4rem;
			p {
				font-size: 0.75rem;
				font-weight: 500;
				letter-spacing: 3.6px;
				line-height: 16px;
				color: rgb(166, 166, 166);
			}

			h3 {
				font-size: 1.875rem;
				font-weight: 300;
				letter-spacing: -0.75px;
				line-height: 36px;
				color: rgb(255, 255, 255);
			}

			span {
				color: rgb(236, 19, 19);
			}
		}

		.cards-wrapper {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}
</style>
