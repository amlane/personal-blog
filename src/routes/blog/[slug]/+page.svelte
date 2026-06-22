<script>
	let { data } = $props();
</script>

<h1>{data.metadata.title}</h1>
<p>{data.metadata.date}</p>
<div>{@html data.html}</div>