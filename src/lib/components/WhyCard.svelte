<script>
	let { icon, title, text } = $props();
</script>

<div class="card-wrapper">
	<div class="details">
		<div class="icon">
			<svelte:component this={icon} size={24} color="rgb(255, 255, 255)" />
		</div>

		<div class="heading">
			<h3>{title}</h3>
		</div>

		<div class="text">
			<p>{text}</p>
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
				width: 3rem;
				height: 3rem;
				justify-content: center;
				align-items: center;
				background-color: rgb(26, 26, 26);
				border-radius: 1rem;
				margin-bottom: 1.5rem;
			}
			.heading {
				h3 {
					font-size: 1.25rem;
					color: rgb(255, 255, 255);
					letter-spacing: -0.5px;
					line-height: 28px;
					font-weight: 500;
					margin-bottom: 0.75rem;
				}
			}

			.text {
				p {
					color: rgb(166, 166, 166);
					font-size: 1rem;
				}
			}
		}
	}
</style>
