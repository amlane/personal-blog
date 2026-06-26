<script>
    import Navbar from "../../navbar.svelte";
	let { data } = $props();
</script>
<Navbar />

<h1>{data.metadata.title}</h1>
<p>{data.metadata.date}</p>
<div>{@html data.html}</div>