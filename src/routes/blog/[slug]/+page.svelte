<script>
    import Navbar from "../../navbar.svelte";
	let { data } = $props();
</script>
<Navbar />

<h1>{data.metadata.title}</h1>
<p>{data.metadata.date}</p>
<p>{data.metadata.draft ? 'In Progress' : ''}</p>
<div>{@html data.html}</div>