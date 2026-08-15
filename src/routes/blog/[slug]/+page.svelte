<script>
	import Footer from '../../footer.svelte';
	import HomeBtn from '../../homebtn.svelte';
	let { data } = $props();

	const date = data.metadata.date;
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>
<div class="container center-page">
<div class="blog page-content">
<p class="date text-center">{formattedDate}</p>
<h1 class="title text-center">{data.metadata.title}</h1>
<!-- <p class="py-16">{data.metadata.draft ? 'In Progress' : ''}</p> -->
 {#if data.metadata.draft == true}
  <p class="py-16 text-center">Coming Soon</p>
 {:else}
  <div class="py-16">{@html data.html}</div>
 {/if}
</div>
<Footer />
<HomeBtn />
</div>