<script>
	import HomeBtn from '../routes/homebtn.svelte';
</script>

<footer class="footer d-flex flex-column center-page">
	<hr class="separator" />
	<div class="d-flex space-between align-items-center w-50">
		<div>
			<a class="px-4 hoverable" href="/about" target="_blank" aria-label="about page"> About </a>
		</div>
		<div><HomeBtn /></div>
		<div class="px-4">
			<a class="px-4 hoverable" href="mailto:reallycoolcoder@gmail.com" aria-label="email">
				Email
			</a>
		</div>
	</div>
	<hr class="separator" />
</footer>
