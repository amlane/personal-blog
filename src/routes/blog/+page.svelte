<script>
	import Navbar from "../navbar.svelte";
	let { data } = $props();
</script>
<Navbar />

<h1>Blog posts</h1>
<p>A random collection of unoriginal thoughts from a martian girl having a human experience</p>
<ul>
{#each data.links as link (link.slug)}
 <li>
    <a href={link.href}>{link.title}</a>
 </li>
 {/each}
</ul>