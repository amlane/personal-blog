<script>
	import Footer from '../footer.svelte';
	import HomeBtn from '../homebtn.svelte';
	let { data } = $props();
	let sortedData = $derived([...data.links.sort((a, b) => new Date(a.date) - new Date(b.date))]);
</script>

<div class="container center-page">
	<div class="reflections page-content">
		<h1 class="text-center title">Reflections</h1>
		<content class="main-content">
			<p>A collections of prose about finding deeper meaning in every day ordinary life events.</p>
		</content>
		<ul class="text-center py-16">
			{#each sortedData as link (link.slug)}
				<li class="py-4 text-xl">
					<a href={link.href} class="hoverable">{link.title}</a>
				</li>
			{/each}
		</ul>
	</div>
	<Footer />
	<HomeBtn />
</div>
