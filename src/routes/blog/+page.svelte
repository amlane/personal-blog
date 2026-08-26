<script>
	import Footer from '../footer.svelte';
	import HomeBtn from '../homebtn.svelte';
	let { data } = $props();
	let sortedData = $derived([...data.links.sort((a, b) => new Date(a.date) - new Date(b.date))]);
</script>

<div class="container center-page">
	<div class="reflections page-content">
		<h1 class="text-center title">Reflections</h1>
		<content class="text-center">
			<p>I enjoy finding deeper meaning in every day ordinary life events.</p>
			<p>This is a place to share my bite-size thoughts.</p>
		</content>
		<ul class="text-center py-16">
			{#each sortedData as link (link.slug)}
				<li class="py-4 text-xl">
					<a href={link.href} class="hoverable">{link.title}</a>
				</li>
			{/each}
		</ul>
		<content>
			<p>
				By making creative writing a practice, I hope to discover more about myself and how I think.
				Find my contradictions and expose my blind spots. Writing is the ultimate form of thinking,
				forcing the floating thoughts in our minds into a solid concept.
			</p>
			<br />
			<p>
				If you read my work and want to offer me any advice on how to improve my writing, please
				reach out to me. I would love to connect and learn from others.
			</p>
			<br />
			<p>
				All of my posts are written in my own words without the use of AI. This will undoubtedly
				result in work that is less polished, lacking semantic flow and riddled with grammatical
				errors that might not "land" the way I had intended but I believe the world could use more
				authenticity and individuality.
			</p>
		</content>
	</div>
	<Footer />
	<HomeBtn />
</div>
