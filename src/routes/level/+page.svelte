<script>
    import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

    const bands = ["Linkin Park", "BMTH", "Paramore", "Korn"];
</script>

<svelte:head>
	<title>Level</title>
	<meta name="description" content="A game level" />
</svelte:head>

<div class="level">
    <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcome_fallback} alt="Welcome" />
    </picture>
    <h5>what is the name of this band?</h5>
    <ul>
        {#each bands as band}
          <li>
            <a href="/level">{band}</a>
          </li>
       {/each}
    </ul>
</div>

<style>
    img {
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

    .level {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        padding-left: 2.5rem;
    }


    ul {
        list-style: none;
    }

    a {
        background-color: darkblue;
        border-radius: 20px;
        padding-left: 1.5rem;
        margin-top: 1.5rem;
        font-weight: 600;
        font-size: 2.5rem;
        color: whitesmoke;
        text-decoration: none;
    }
</style>