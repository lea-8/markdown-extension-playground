<script>
  export let columns = 2;
  export let gap = 2;
</script>

<div
  style={`display: grid; grid-template-columns: repeat(${columns}, 1fr); gap: ${gap}rem;`}
>
  <slot />
</div>
