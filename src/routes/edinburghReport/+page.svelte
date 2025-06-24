<script>
  import SimpleRport from './SimpleReport.vismd';
  
  export let data;
  console.log("data at +page.svelte:", data.flowers[0].sepalLength);
</script>

<DetailedRport />