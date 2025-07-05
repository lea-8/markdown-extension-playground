<script>
  export let className = '';
</script>

<div class={`column ${className}`}>
  <slot />
</div>

<style>
  .column {
    flex: 1;
    padding: 1rem;
    border: 1px solid #ccc;
  }
</style>