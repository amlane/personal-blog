<script>
	import Footer from '../footer.svelte';
	import ProfilePic from '../../lib/assets/agirlandherdog.jpg';
</script>

<div class="container center-page">
	<div class="about page-content">
		<h1 class="title text-center">About</h1>
		<div class="main-content" style="max-width: 450px;">
			<div class="d-flex flex-column">
				<div class="d-flex">
					<img
						src={ProfilePic}
						alt="a girl and her dog"
						style="max-width:200px;padding:12px; margin-right:12px;border:2px solid gray;object-fit: cover;"
					/>
					<div style="align-self:flex-start;">
						<p class="pb-12">Hey, I'm Amanda.</p>
						<p class="pb-12">That's me and my dog, Prince Robert.</p>
						<p>
							I often find myself reflecting on seemingly mundane experiences in my daily life and
							how they can contain hidden lessons or deeper meaning. I made this space to share
							those thoughts.
						</p>
					</div>
				</div>
				<div class="pt-12">
					<p>
						I designed this site as a tribute to my teenage years, spent customizing layouts and
						blogging on LiveJournal. I wanted to create my own weird little corner of the internet
						that felt like a person actually made it, without the intention of being commodified.
					</p>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</div>
