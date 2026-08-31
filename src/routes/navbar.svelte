<script>
	import { page } from '$app/state';
</script>

<nav class="main-nav">
	<ol>
		{#each page.data.links as link (link.slug)}
			<li><a href={link.href}>{link.title.toUpperCase()}</a></li>
		{/each}
	</ol>
</nav>
