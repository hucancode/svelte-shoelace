<script>
  import { onMount } from "svelte";
  onMount(async () => {
    await import(
      "@shoelace-style/shoelace/dist/components/animation/animation"
    );
  });
  let play = false;
</script>

<sl-animation
  name="bounce"
  duration={2000}
  {play}
  on:mouseenter={() => (play = true)}
  on:mouseleave={() => (play = false)}
>
  <span class="hand-icon">🙌</span>
</sl-animation>

<style>
  .hand-icon {
    font-size: 4.5rem;
    width: 1em;
    aspect-ratio: 1;
    cursor: default;
  }
</style>
