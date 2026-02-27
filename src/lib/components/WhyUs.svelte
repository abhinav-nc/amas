<script>
	import WhyCard from './WhyCard.svelte';
	import { Compass, Users, Shield, Sparkles } from '@lucide/svelte';
	let cards=[
		{
			icon: Compass,
			title: "Expert Navigation",
			text: "Certified mountain guides with decades of experience on the world's most challenging trails."
		},
		{
			icon: Users,
			title: "Small Groups",
			text: "Intimate expeditions with maximum 8 trekkers for personalized attention and authentic experiences."
		},
		{
			icon: Shield,
			title: "Safety First",
			text: "Comprehensive medical support, satellite communication, and emergency evacuation protocols."
		},
		{
			icon: Sparkles,
			title: "Premium Experience",
			text: "Luxury accommodation, gourmet meals, and premium gear included in every expedition."
		}
	]
</script>

<div class="whyus-wrapper" id="whyus">
	<div class="heading">
		<p>WHAT WE OFFER</p>
		<h3>Why Trek <span>With Us</span></h3>
	</div>

	<div class="cards-wrapper">
		{#each cards as card}
			<WhyCard
				icon={card.icon}
				title={card.title}
				text={card.text}
			/>
		{/each}
	
	</div>
</div>

<style>
	.whyus-wrapper {
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

	@media(min-width:768px){
		.whyus-wrapper {
		width: 100%;
		padding: 5rem 3rem;
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
				font-size: 3rem;
				font-weight: 300;
				letter-spacing: -1.2px;
				line-height: 48px;
				color: rgb(255, 255, 255);
			}

			span {
				color: rgb(236, 19, 19);
			}
		}

		.cards-wrapper {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
			
		}
	}
     }

	 	@media (min-width:1024px){
		.whyus-wrapper {
		padding-inline: 6rem;
	}

	
}

</style>
