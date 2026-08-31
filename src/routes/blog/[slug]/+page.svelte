<script>
	import Footer from '../../footer.svelte';
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
	let formattedDate = $derived(formatDate(data.metadata.date));
	let currentIndex = $derived(data.currentIndex);
	let prevLink = $derived(currentIndex > 0 ? data.links[currentIndex - 1].href : null);
	let nextLink = $derived(
		currentIndex !== data.links.length - 1 ? data.links[currentIndex + 1].href : null
	);
</script>

<div class="blog-post center-page">
	<div class="page-content content-container">
		<h1 class="title text-center">{data.metadata.title}</h1>
		<section class="content-font">
			<div class="py-16">{@html data.html}</div>
			<p class="date muted-text pt-16">Published {formattedDate}</p>
		</section>
	</div>
	<div class="d-flex space-between content-container mt-24">
		{#if prevLink != null}
			<a href={prevLink} class="d-flex"
				><svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 24 24" fill="none">
					<g id="Arrow / Arrow_Left_SM">
						<path
							id="Vector"
							d="M17 12H7M7 12L11 16M7 12L11 8"
							stroke="#000000"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				</svg><span>Previous</span></a
			>
		{:else}
			<p style="visibility:hidden;">No previous post</p>
		{/if}
		{#if nextLink != null}
			<a href={nextLink} class="d-flex"
				><span>Next</span><svg
					xmlns="http://www.w3.org/2000/svg"
					width="20px"
					viewBox="0 0 24 24"
					fill="none"
				>
					<g id="Arrow / Arrow_Right_SM">
						<path
							id="Vector"
							d="M7 12H17M17 12L13 8M17 12L13 16"
							stroke="#000000"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				</svg></a
			>
		{/if}
	</div>
	<Footer />
</div>
