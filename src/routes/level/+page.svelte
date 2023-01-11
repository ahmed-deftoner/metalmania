<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
    let idx: number = 0;
    let current: string[] = Array.prototype.fill("", 0, 4);
    let completed: boolean = false;
    let score: number = 0;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function checkoption(el: string, i: number) {
        if (el === data.arr[idx].right) {
            current[i] = "correct";
            score++;
        } else {
            current[i] = "incorrect";
        }
        await sleep(1000);
        current[i] = "";
        idx++;
        if (idx == 5) {
            completed = true;
            score = (score / idx) * 100;
        }
    }

</script>

<svelte:head>
	<title>Level</title>
	<meta name="description" content="A game level" />
</svelte:head>

<div class="level">
    {#if completed === true}
        <h1>Level Complete</h1>
        <h4>You got {score}% right</h4>
    {:else}
        <picture>
            <source srcset={data.arr[idx]?.img} type="image/jpg" />
        </picture>
        <h3>{data.arr[idx].question}</h3>
        {#each data.arr[idx].options as band, index}
            <button class="{current[index]}" on:click={() => checkoption(band, index)}>
                {band}
            </button>
        {/each}
    {/if}
</div>

<style>

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
        cursor: pointer;
    }

    .correct {
        background-color: green;
    }

    .incorrect {
        background-color: red;
    }
</style>