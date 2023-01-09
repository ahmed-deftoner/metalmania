<script lang="ts">
	import welcome_fallback from '$lib/images/svelte-welcome.png';
    import type { PageData } from './$types';

    export let data: PageData;
    let current: string[] = Array.prototype.fill("", 0, 4);

    function checkoption(el: string, idx: number) {
        if (el === data.arr[0].right) {
            current[idx] = "correct";
        } else {
            current[idx] = "incorrect";
        }
    }

</script>

<svelte:head>
	<title>Level</title>
	<meta name="description" content="A game level" />
</svelte:head>

<div class="level">
    <picture>
        <source srcset={data.arr[0].img} type="image/jpg" />
        <img src={welcome_fallback} alt="Welcome" />
    </picture>
    <h5>what is the name of this band?</h5>
    <ul>
        {#each data.arr[0].options as band, idx}
          <li>
            <button class="{current[idx]}" on:click={() => checkoption(band, idx)}>
                {band}
            </button>
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

    .correct {
        background-color: green;
    }

    .incorrect {
        background-color: red;
    }
</style>