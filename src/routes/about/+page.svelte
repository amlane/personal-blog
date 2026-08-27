<script>
	import Footer from '../footer.svelte';
	import Homebtn from '../homebtn.svelte';
	import ProfilePic from '../../lib/assets/agirlandherdog.jpg';
</script>

<div class="container center-page">
	<div class="about page-content">
		<h1 class="title text-center">About</h1>
		<div class="main-content">
			<img
				src={ProfilePic}
				alt="a girl and her dog"
				style="float:left;width:200px;padding:12px;margin-right:12px;border:2px solid black;"
			/>
			<p class="pb-12">
				Hey, I'm Amanda. Self-proclaimed Queen of bike trails. That's me and my dog, Prince Robert.
				When we're not out exploring nature, you can find me coding, reading or crafting.
			</p>
			<p class="pb-12">
				Like most people who grew up in the 90s, I was first introduced to code through websites
				like MySpace and LiveJournal. I remember discovering the code editor and seeing the
				different designs other people created. I loved how a simple border-shadow, a hero image and
				a squiggly underline could convey someone's essense and create an emotional response in the
				viewer, just like seeing a work of art. I would spend hours inspecting code other people
				wrote, building my own layouts and experimenting with different styles. After many years
				making art in various mediums, one thing I have learned about myself is that I aim for my
				creations to be both functional and beautiful.
			</p>
			<p class="pb-12">
				For the last 6 years I've worked as a full-stack web developer building cool things that
				make an impact by making messy things into things people can actually use.
			</p>
		</div>
	</div>
	<Footer />
	<Homebtn />
</div>
