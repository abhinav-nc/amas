<script>
	let { number, text } = $props();
</script>

<div class="card-container">
	<h3>{number}+</h3>
	<p>{text}</p>
</div>

<style>
	.card-container {
		width: 100%;
		background-color: rgb(13, 13, 13);
		border: 1px solid rgb(51, 51, 51);
		border-radius: 1.5rem;
		padding: 2rem;

		h3 {
			margin-bottom: 0.5rem;
			color: rgb(236, 19, 19);
			font-size: 2rem;
			font-weight: 300;
			line-height: 40px;
			text-align: center;
		}

		p {
			color: rgb(166, 166, 166);
			font-size: 1rem;
			line-height: 20px;
			text-align: center;
		}
	}
</style>
