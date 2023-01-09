<script lang="ts">
    import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import l1 from '$lib/images/l1/1.jpg';
    import type { PageData } from './$types';

    export let data: PageData;

</script>

<svelte:head>
	<title>Level</title>
	<meta name="description" content="A game level" />
</svelte:head>

<div class="level">
    <picture>
        <source srcset={l1} type="image/jpg" />
        <img src={welcome_fallback} alt="Welcome" />
    </picture>
    <h5>what is the name of this band?</h5>
    <ul>
        {#each data.arr[0].options as band}
          <li>
            <button>{band}</button>
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

    button {
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