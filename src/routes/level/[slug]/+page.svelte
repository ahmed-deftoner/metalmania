<script lang="ts">
    import type { PageData } from '../$types';
    import { completed } from '../../../Store';

    export let data: PageData;
    let idx: number = 0;
    let current: string[] = Array.prototype.fill("", 0, 4);
    let complete: boolean = false;
    let score: number = 0;
    let pressed: boolean = false;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function checkoption(el: string, i: number) {
        pressed = true;
        if (el === data.arr[idx].right) {
            current[i] = "correct";
            score++;
        } else {
            current[i] = "incorrect";
        }
        await sleep(1000);
        idx++;
        if (idx == 5) {
            complete = true;
            $completed[0] = true;
            console.log($completed);
            score = (score / idx) * 100;
        }
        current[i] = "";
        pressed = false;
    }

</script>

<svelte:head>
	<title>Level</title>
	<meta name="description" content="A game level" />
</svelte:head>

<div class="level">
    {#if complete === true}
        <h1>Level Complete</h1>
        <h4>You got {score}% right</h4>
        <a href="/">Go to Home</a>
    {:else}
        {#if data.arr[idx]?.img}
            <img src={data.arr[idx].img} alt="option" />
        {/if}
        <h3>{data.arr[idx].question}</h3>
        {#each data.arr[idx].options as band, index}
            <button class="{current[index]} {pressed === true ? "disabled": ""}" on:click={() => checkoption(band, index)}>
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

    img {
        align-self: center;
        justify-content: center;
        height: 50%;
        width: 50%;
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

    .disabled {
        cursor: not-allowed;
        pointer-events: none;
    }

    .correct {
        background-color: green;
    }

    .incorrect {
        background-color: red;
    }
</style>