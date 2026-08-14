<script>
	import Footer from '../footer.svelte';
	import HomeBtn from '../homebtn.svelte';
	let { data } = $props();
</script>
<div class="container center-page">
<div class="reflections page-content">
<h1 class="text-center title">Reflections</h1>
<content class="text-center">
<p>I enjoy examining the deeper meaning underneath ordinary life events. This is a place to share my thoughts, learn from others and allow me a space to continue exploring these ideas and discovering my perspective.</p>
</content>
<ul class="center-page py-16">
{#each data.links as link (link.slug)}
 <li>
    <a href={link.href} class="hoverable">{link.title}</a>
 </li>
 {/each}
</ul>
</div>
<Footer />
<HomeBtn />
</div>