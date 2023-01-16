<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { completed } from '../Store';

	const levels = [1, 2, 3, 4, 5];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Metalmania" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		<strong>Metalmania</strong>
	</h1>
	<div class="card-section">
		{#each levels as level}
			<div class="card">
				{#if $completed[level - 1] === true}
					<h5>Completed</h5>
				{/if}
				<h3 class="level">Level {level}</h3>
				<a on:click={() => console.log($completed)} href="/level/{level}">Play</a>
			</div>
		{/each}
	</div>
	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.card-section {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}

	.card {
		margin-left: 4.5rem;
		margin-top: 1rem;
		background-color: slateblue;
		padding: 2.5rem;
		justify-content: center;
		border-radius: 10px;
		box-shadow: 4px 5px 26px -2px rgba(0,0,0,0.62);
	}

	.level {
		color: azure;
		font-weight: 600;
		font-size: large;
		margin-left: 10px;
		margin-bottom: 1.5rem;
	}

	a {
		background-color: darkmagenta;
		border-radius: 10px;
		border-color: white;
		text-decoration: solid;
		font-weight: 300;
		font-size: medium;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		color: azure;
	}
</style>
