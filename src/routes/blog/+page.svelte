<script>
	// Destructure the data prop using the Svelte 5 page proxy pattern
	let { data } = $props();
</script>

<h1>Blog posts</h1>
<a href="/">Home page</a>
<p>A random collection of unoriginal thoughts from a martian girl having a human experience</p>
<ul>
{#each data.links as link (link.slug)}
 <li>
    <a href={link.href}>{link.title}</a>
 </li>
 {/each}
</ul>