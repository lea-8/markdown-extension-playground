<script>
  export let className = '';
</script>

<div class={`row ${className}`}>
  <slot />
</div>

<style>
  .row {
    display: flex;
    gap: 1rem;
  }
</style>
