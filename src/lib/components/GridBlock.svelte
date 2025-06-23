<script>
    

  export let children;

  const parse = (raw) => {
    const gridMatch = raw.match(/:::grid(.*?):::(.*?):::/s);
    if (!gridMatch) return null;

    const [, gridParams, cellsRaw] = gridMatch;
    const columns = Number((gridParams.match(/columns=(\d+)/) || [])[1] || 1);
    const gap = Number((gridParams.match(/gap=(\d+)/) || [])[1] || 1);

    const cells = [...cellsRaw.matchAll(/:::cell\s+(.*?)\s+:::/gs)].map(m => m[1]);

    return { columns, gap, cells };
  };

  const layout = parse(children);
</script>

{#if layout}
  <div style="display: grid; grid-template-columns: repeat({layout.columns}, 1fr); gap: {layout.gap}rem;">
    {#each layout.cells as cell}
      <div class="cell">
        {@html cell} <!-- Render as HTML to keep markdown formatting -->
      </div>
    {/each}
  </div>
{:else}
  <p style="color: red;">Invalid layout format</p>
{/if}
