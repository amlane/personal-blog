<script>
	import Footer from '../../footer.svelte';
	import HomeBtn from '../../homebtn.svelte';
	let { data } = $props();
</script>
<div class="container center-page">
<div class="blog page-content">
<h1 class="title text-center">{data.metadata.title}</h1>
<p class="py-16">{data.metadata.date}</p>
<p class="py-16">{data.metadata.draft ? 'In Progress' : ''}</p>
<div>{@html data.html}</div>
</div>
<Footer />
<HomeBtn />
</div>