<!-- src/layouts/Layout.svelte -->
<script>
  import FancyList from '$components/FancyList.svelte';
  export let content;
</script>

<svelte:component this={content} components={{ FancyList }} />