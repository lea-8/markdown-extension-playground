<script lang="ts">
    import * as Plot from '@observablehq/plot';
    
    let div: HTMLElement | undefined = $state();
    let text = Plot.text(["Hello, world!"], {frameAnchor: "middle"});

    $effect(() => {
        div?.firstChild?.remove(); // remove old chart, if any
        div?.append(Plot.plot({
            marks: [
            Plot.frame(),
            text
            ]
        }));
        div?.append(
            Plot.plot({
            x: {padding: 0.4},
            marks: [
                Plot.barY(["s", "t", "u"], {x: ["s", "t", "u"], y:[1,2,3]}),
                // Plot.barY(data, {x: "Keyword", y: [1], fill: "green", dx: -2, dy: -2})
            ]})
        );
    });
</script>

<h2>Using static data</h2>
<!-- <div onmousemove={onMousemove} bind:this={div} role="img"></div> -->
<div bind:this={div} role="img"></div>

<h2>Using dynamic data</h2>
Work in progress...