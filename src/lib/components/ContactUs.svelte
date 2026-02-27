<script>
	import { Send, Mail, Phone, MapPin } from 'lucide-svelte';
	const cards = [
		{
			icon: Mail,
			title: 'EMAIL',
			info: 'hello@trekkingvibes.com'
		},
		{
			icon: Phone,
			title: 'PHONE',
			info: '+1 (555) 123-4567'
		},
		{
			icon: MapPin,
			title: 'LOCATION',
			info: 'Boulder, Colorado, USA'
		}
	];
</script>

<div class="container" id="contact">
	<div class="heading">
		<p>GET IN TOUCH</p>
		<h3>Start Your <span>Journey</span></h3>
	</div>

	<div class="text">
		<p>
			Ready to embark on your next adventure? Fill out the form and our team will get back to you
			within 24 hours to help plan your perfect expedition.
		</p>
	</div>

	<div class="contact">
		{#each cards as card (card.title)}
			<div class="card">
				<div class="icon">
					<card.icon size="20" color="white" />
				</div>
				<div class="info">
					<p>{card.title}</p>
					<h3>{card.info}</h3>
				</div>
			</div>
		{/each}
	</div>

	<div class="form">
		<form action="">
			<div class="form-element">
				<label for="">Name</label>
				<input type="text" placeholder="Your Name" required />
			</div>

			<div class="form-element">
				<label for="">Email</label>
				<input type="email" placeholder="Your Email" required />
			</div>

			<div class="form-element">
				<label for="">intrested Trek</label>
				<select required>
					<option value="">Select a trek</option>
					<option value="trek1">Trek 1</option>
					<option value="trek2">Trek 2</option>
					<option value="trek3">Trek 3</option>
				</select>
			</div>

			<div class="form-element">
				<label for="">Message</label>
				<textarea type="text" placeholder="Tell us about your adventure goals..." required
				></textarea>
			</div>

			<button type="submit">Send Message <Send size={18} color="white" /></button>
		</form>
	</div>
</div>

<style>
	.container {
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
			align-items: start;
			gap: 1rem;
			margin-bottom: 2rem;
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

		.text {
			width: 100%;
			font-size: 1rem;
			line-height: 26px;
			color: rgb(166, 166, 166);
			margin-bottom: 3rem;
		}

		.contact {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			margin-bottom: 4rem;

			.card {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: start;
				gap: 1rem;

				.icon {
					width: 3rem;
					height: 3rem;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 1rem;
					background-color: rgb(26, 26, 26);
				}

				.info {
					p {
						color: rgb(166, 166, 166);
						font-size: 0.75rem;
						letter-spacing: 0.6px;
						line-height: 16px;
					}

					h3 {
						color: rgb(255, 255, 255);
						font-size: 1rem;
						font-weight: 500;
						line-height: 24px;
					}
				}
			}
		}

		.form {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 1.5rem;
			color: rgb(166, 166, 166);
			form {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
				label {
					font-size: 0.875rem;
				}
				input {
					background-color: rgb(13, 13, 13);
					padding: 0.75rem 1rem;
					border-radius: 1rem;
					border: 0.8px solid rgb(51, 51, 51);
					font-size: 1rem;
				}

				select {
					background-color: rgb(13, 13, 13);
					padding: 0.75rem 1rem;
					border-radius: 1rem;
					border: 0.8px solid rgb(51, 51, 51);
					font-size: 1rem;
				}

				textarea {
					background-color: rgb(13, 13, 13);
					padding: 0.75rem 1rem;
					border-radius: 1rem;
					border: 0.8px solid rgb(51, 51, 51);
					font-size: 1rem;
					min-height: 100px;
				}

				button {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 0.5rem;
					background-color: rgb(236, 19, 19);
					padding: 1rem 2rem;
					color: rgb(255, 255, 255);
					font-size: 1rem;
					border-radius: 1rem;
				}
			}

			.form-element {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
			}
		}
	}
</style>
