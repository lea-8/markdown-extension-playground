<script>
  import SimpleRport from './SimpleReport.vismd';
  
  export let data;
  console.log("data at +page.svelte:", data.flowers[0].sepalLength);
</script>

<SimpleRport data={data} />

{data.flowers}


<!-- <h2>wa?</h2> -->