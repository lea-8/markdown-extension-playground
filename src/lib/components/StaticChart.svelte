<script lang="ts">
    import * as Plot from '@observablehq/plot';

    let { data = "", xP = "sepalLength", yP = "petalLength" } = $props();
    // let { x = "sepalLength" } = $props();
    // let { y = "" } = $props();

    let div: HTMLElement | undefined = $state();
    let dyn: HTMLElement | undefined = $state();

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
<div id="sta" bind:this={div} role="img"></div>

<h2>Using dynamic data</h2>
<div id="dyn" bind:this={dyn} role="img"></div>
