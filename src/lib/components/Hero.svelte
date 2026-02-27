<script>
	import { ArrowDown } from 'lucide-svelte';
</script>

<div class="hero-wrapper" id="hero">
	<div class="hero-content">
		<p class="hero-intro">ADVENTURE AWAITS</p>

		<h2>Explore the World's <br /> <span>Most Epic</span> Trails</h2>

		<p>
			Premium trekking experiences crafted for adventurers who seek the extraordinary. From
			Himalayan peaks to Patagonian wilderness.
		</p>

		<div class="hero-cta">
			<button class="red">View Expeditions</button>
			<button class="transparent">Learn More</button>
			<div></div>
		</div>
	</div>
	<div class="arrow">
		<ArrowDown size={32} color="white" />
	</div>
	
</div>

<style>
	.hero-wrapper {
		background-color: rgba(58, 11, 7, 0.515);
		background-image: url('/hero-bg.jpg');
		background-blend-mode: overlay;
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100vh;
		padding-inline: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		font-family: inter, sans-serif;
	}

	.hero-content {
		.hero-intro {
			letter-spacing: 3.6px;
			margin-bottom: 1.5rem;
			font-size: 0.75rem;
		}

		h2 {
			font-size: 3rem;
			font-weight: 700;
			color: rgb(255, 255, 255);
			margin-bottom: 2rem;
			line-height: 48px;
		}

		p {
			font-size: 1.25rem;
			color: rgb(166, 166, 166);
			line-height: 28px;
			margin-bottom: 3rem;
		}

		span {
			color: rgb(236, 19, 19);
		}
	}

	.hero-cta {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		.red {
		
			background-color: rgb(236, 19, 19);
			color: rgb(255, 255, 255);
			width: 100%;
			padding-inline: 2rem;
			padding-block: 1rem;
			border-radius: 24px;
			border: none;
			font-weight: 500;
		}
		.transparent {
			
			background-color: transparent;
			color: rgb(255, 255, 255);
			width: 100%;
			padding-inline: 2rem;
			padding-block: 1rem;
			border-radius: 24px;
			border: 1px solid rgba(255, 255, 255, 0.2);
			font-weight: 500;
		}
	}

	@media (min-width:768px){
		.hero-wrapper {
		
		padding-inline: 3rem;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-evenly;
		font-family: inter, sans-serif;
	}

	.hero-content {
		.hero-intro {
			letter-spacing: 3.6px;
			margin-bottom: 1.5rem;
			font-size: 0.75rem;
			font-weight: 500;
		}

		h2 {
			font-size: 3rem;
			font-weight: 700;
			color: rgb(255, 255, 255);
			margin-bottom: 2rem;
			letter-spacing: -1.2px;
			line-height: 48px;
		}

		p {
			font-size: 1.25rem;
			color: rgb(166, 166, 166);
			line-height: 28px;
			margin-bottom: 3rem;
			max-width: 36rem;
		}

		span {
			color: rgb(236, 19, 19);
		}
		
	}

	.hero-cta {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		gap: 1rem;

		.red {
			background-color: rgb(236, 19, 19);
			color: rgb(255, 255, 255);
			width: 35%;
			padding-inline: 2rem;
			padding-block: 1rem;
			border-radius: 24px;
			border: none;
			font-weight: 500;
		}
		.transparent {
			background-color: transparent;
			color: rgb(255, 255, 255);
			width: 30%;
			padding-inline: 2rem;
			padding-block: 1rem;
			border-radius: 24px;
			border: 1px solid rgba(255, 255, 255, 0.2);
			font-weight: 500;
		}

		
	}
	.arrow{
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}

	@media (min-width:1024px){
		.hero-wrapper {
		padding-inline: 6rem;
	}
}
</style>
