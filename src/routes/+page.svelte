<script>
  import WavingHand from "$lib/components/waving-hand.svelte";
  import { onMount } from "svelte";
  onMount(async () => {
    await import("@shoelace-style/shoelace/dist/components/button/button");
  });
</script>

<svelte:head>
  <title>SvelteKit</title>
</svelte:head>
<div class="container fullscreen">
  <WavingHand />
  <div class="container">
    <h1 class="welcome">
      Welcome to <span class="font-cursive">Sveltekit</span>
    </h1>
    <sl-button href="https://kit.svelte.dev">
      <sl-icon slot="prefix" name="question-octagon" />
      Documentation
    </sl-button>
  </div>
</div>

<style>
  .fullscreen {
    width: 100vw;
    height: 100vh;
    background: var(--sl-overlay-background-color);
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .welcome {
    font-size: var(--sl-font-size-2x-large);
    font-weight: var(--sl-font-weight-bold);
  }
</style>
