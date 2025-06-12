<script lang="ts">
    import * as Plot from '@observablehq/plot';
    import * as d3 from 'd3';
    
    let div: HTMLElement | undefined = $state();
    let data = Plot.text(["Hello, world!"])

    $effect(() => {
        div?.firstChild?.remove(); // remove old chart, if any
        div?.append(Plot.plot({
            marks: [
            Plot.frame(),
            Plot.text(["Hello, world!"], {frameAnchor: "middle"})
            ]
        }));
        // div?.append(
        //     Plot.plot({
        //     grid: true,
        //     inset: 10,
        //     aspectRatio: Plot.fixed ? 1 : undefined,
        //     color: {legend: true},
        //     marks: [
        //         Plot.frame(),
        //         Plot.dot(penguins, {x: "culmen_length_mm", y: "culmen_depth_mm", stroke: "species"})
        //     ]
        //     })
        // )
    });

// Plot.plot({
//   marks: [
//     Plot.frame(),
//     Plot.text(["Hello, world!"], {frameAnchor: "middle"})
//   ]
// })

</script>

<!-- <div onmousemove={onMousemove} bind:this={div} role="img"></div> -->
<div bind:this={div} role="img"></div>


<h1>Hi there</h1>