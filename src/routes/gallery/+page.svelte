<script>
  import Gallery from "../../components/Gallery.svelte";

  let example_gallery = [
        '7.png',
        '8.png',
        '10.png',
        '257.png',
        '259.png',
        '260.png',
        '263.png',
        '264.png',
        '265.png',
        '266.png',
        '267.png',
        '268.png',
        '269.png',
       '270.png',
        '271.png',
        '272.png',
    ]
</script>

<!-- <div class="flex flex-col justify-center items-center h-[90vh]">
  <Gallery example_gallery={example_gallery}/>
</div> -->

<div>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 gap-4">
    {#each example_gallery as nft}
      <div class="flex items-center justify-center sm:aspect-square">
        <img src="example_gallery/{nft}" alt="Image 1" class="max-w-full h-auto">
      </div>
    {/each}
    <!-- Add more grid items here -->
  </div>
</div>