<script lang="ts">
  import * as Plot from '@observablehq/plot';
  import * as d3 from 'd3';

  let div: HTMLElement | undefined = $state();
  let data = $state(d3.ticks(-2, 2, 200).map(Math.sin));

  function onMousemove(event: MouseEvent) {
    const [x, y] = d3.pointer(event);
    data = data.slice(-200).concat(Math.atan2(x, y));
  }

  $effect(() => {
    div?.firstChild?.remove(); // remove old chart, if any
    div?.append(Plot.lineY(data).plot({ grid: true })); // add the new chart
  });
</script>

<div onmousemove={onMousemove} bind:this={div} role="img"></div>

<h1>Hi there</h1>