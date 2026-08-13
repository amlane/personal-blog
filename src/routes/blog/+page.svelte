<script>
	import Navbar from "../navbar.svelte";
	let { data } = $props();
</script>
<Navbar />

<h1>Bite-sized Reflections</h1>
<p>I enjoy examining the deeper meaning underneath ordinary life events. This is a place to share my thoughts, learn from others and allow me a space to continue exploring these ideas and discovering my perspective.</p>
<p>If you want to connect, please reach out to me at <a href="mailto:reallycoolcoder@gmail.com">reallycoolcoder@gmail.com</a>.</p>
<ul>
{#each data.links as link (link.slug)}
 <li>
    <a href={link.href}>{link.title}</a>
 </li>
 {/each}
</ul>