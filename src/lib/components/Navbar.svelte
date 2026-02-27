<script>
	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav>
	<div class="container">
		<div class="logo">
			<h1>Amas <span>Kerala</span></h1>
		</div>

		<div class="lg-menu">
			<div class="links">
			<a href="#adventures" onclick={() => (isOpen = false)}>Treks</a>
			<a href="#whyus" onclick={() => (isOpen = false)}>Services</a>
			<a href="#aboutus" onclick={() => (isOpen = false)}>About</a>
			<a href="#gallery" onclick={() => (isOpen = false)}>Gallery</a>
			<a href="#contact" onclick={() => (isOpen = false)}>Contact</a>
		</div>

		<div class="button">
			<button>Book Now</button>
		</div>
		</div>

		<div class="hamburger-button">
			<button
				aria-label="menu"
				aria-expanded={isOpen}
				aria-controls="nav-menu"
				onclick={toggleMenu}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-menu"
				>
					<line x1="4" x2="20" y1="12" y2="12"></line>
					<line x1="4" x2="20" y1="6" y2="6"></line>
					<line x1="4" x2="20" y1="18" y2="18"></line>
				</svg>
			</button>
		</div>
	</div>
</nav>

{#if isOpen}
	<div class="menu" id="nav-menu" role="dialog" aria-label="Navigation menu">
		<div class="links">
			<a href="#adventures" onclick={() => (isOpen = false)}>Treks</a>
			<a href="#whyus" onclick={() => (isOpen = false)}>Services</a>
			<a href="#aboutus" onclick={() => (isOpen = false)}>About</a>
			<a href="#gallery" onclick={() => (isOpen = false)}>Gallery</a>
			<a href="#contact" onclick={() => (isOpen = false)}>Contact</a>
		</div>

		<div class="button">
			<button>Book Now</button>
		</div>
	</div>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		width: 100%;
		background-color: hsl(0, 0%, 10%);
		color: hsl(0, 0%, 95%);
		height: 56px;
		font-family: inter, sans-serif;
		display: flex;
		border-radius: 0 0 0.5rem 0.5rem;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding-inline: 2rem;
	}

	.logo {
		h1 {
			font-size: 1.25rem;
			font-weight: 700;
		}

		span {
			color: hsl(0, 85%, 47%);
		}
	}

	.hamburger-button {
		background-color: hsl(0, 0%, 10%);
		cursor: pointer;
		button {
			background-color: transparent;
			border: none;
			color: hsl(0, 0%, 95%);
			cursor: pointer;
			padding: 0.5rem;
		}
	}

	.lg-menu {
		display: none;
	}
	.menu {
		position: fixed;
		top: 56px;
		left: 0;
		right: 0;
		z-index: 999;
		background-color: hsl(12, 56%, 2%);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		border-top: 0.1px solid hsl(0, 100%, 20%);
		font-family: inter, sans-serif;
		padding: 2rem 2rem;

		.links {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			a {
				color: hsl(0, 0%, 65%);
				text-decoration: none;
				padding-block: 0.5rem;
				font-size: 1.125rem;
				font-weight: 500;
			}
		}

		.button {
			width: 100%;
			display: flex;
			justify-content: center;
			height: 3rem;

			button {
				background-color: hsl(0, 85%, 47%);
				color: hsl(0, 0%, 95%);
				width: 100%;
				border-radius: 0.75rem;
				border: 0;
				font-weight: 600;
			}
		}
	}

	@media (min-width: 768px) {

		
		nav{
			display: flex;
			justify-content: space-between;
		}


		.hamburger-button {
			display: none;
		}

		.lg-menu{
		display: flex;
		gap: 2rem;
		font-family: inter, sans-serif;

		.links {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			a {
				color: hsl(0, 0%, 65%);
				text-decoration: none;
				font-size: 0.875rem;
				font-weight: 500;
			}
		}

		
			button {
				background-color: hsl(0, 85%, 47%);
				color: hsl(0, 0%, 95%);
				border-radius: 1rem;
				border: 0;
				font-size: 0.875rem;
				font-weight: 500;
				padding: 0.625rem 1.5rem;
			}

	}
		
		
	}
</style>
