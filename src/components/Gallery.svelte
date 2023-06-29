<script>
  export let example_gallery = []
</script>

<div class="grid grid-cols-4 justify-items-center items-center gap-2 max-w-2xl">
    {#each example_gallery as nft}
        <img src="example_gallery/{nft}" alt="">
    {/each}
</div>