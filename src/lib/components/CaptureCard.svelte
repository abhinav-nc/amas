<script>
	let { location, title, image } = $props();
</script>

<div class="container">
		<img src={image} alt={title} />

	<div class="content">
		<p>{location}</p>
		<h3>{title}</h3>
	</div>
</div>

<style>
	.container {
		position: relative;
		width: 100%;
		border-radius: 1.5rem;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.content {
			position: absolute;
			inset: 0;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: flex-start;
			padding: 1.5rem;

			p {
				color: rgb(236, 19, 19);
				font-size: 1rem;
				letter-spacing: 0.6px;
				line-height: 16px;
			}

			h3 {
				color: rgb(255, 255, 255);
				font-size: 1.1rem;
				font-weight: 500;
				letter-spacing: -0.45;
				line-height: 28px;
			}
		}
	}
</style>
