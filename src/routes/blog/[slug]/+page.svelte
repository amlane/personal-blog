<script>
	import Footer from '../../footer.svelte';
	import HomeBtn from '../../homebtn.svelte';
	let { data } = $props();

	function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day); // local time, no timezone shift
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
	const formattedDate = formatDate(data.metadata.date);
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