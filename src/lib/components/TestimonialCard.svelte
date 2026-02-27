<script>
	import { Quote } from 'lucide-svelte';
	let { name, role, quote } = $props();
</script>

<div class="card-wrapper">
	<div class="details">
		<div class="icon">
			<Quote size={32} color="rgb(236, 19, 19)" />
		</div>

		<div class="quote">
			<p>"{quote}"</p>
		</div>

		<div class="person">
			<h3>{name}</h3>
			<p>{role}</p>
		</div>
	</div>
</div>

<style>
	.card-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: hsl(0, 0%, 5%);
		border: 1px solid rgb(51, 51, 51);
		border-radius: 1.5rem;
		font-family: inter, sans-serif;
		padding: 2rem;

		.details {
			width: 100%;
			display: flex;
			flex-direction: column;

			.icon {
				display: flex;

				justify-content: start;
				align-items: center;
				border-radius: 1rem;
				margin-bottom: 1.5rem;
			}

			.quote {
				margin-bottom: 2rem;
				p {
					color: rgb(255, 255, 255);
					font-size: 1rem;
					line-height: 26px;
				}
			}

			.person {
				h3 {
					font-size: 1rem;
					color: rgb(255, 255, 255);
					letter-spacing: -0.5px;
					line-height: 24px;
					font-weight: 500;
				}

				p {
					color: rgb(166, 166, 166);
					font-size: 1rem;
					line-height: 20px;
				}
			}
		}
	}
</style>
