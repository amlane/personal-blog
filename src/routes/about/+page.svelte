<script>
	import Footer from '../footer.svelte';
	import ProfilePic from '../../lib/assets/agirlandherdog.jpg';
</script>

<div class="container center-page">
	<div class="about content-container">
		<div class="main-content">
			<div class="d-flex flex-column">
				<div class="d-flex pt-16">
					<div style="align-self:flex-start;">
						<img
							src={ProfilePic}
							alt="a girl and her dog"
							style="float:right;max-width:200px;padding:12px; margin-left:14px;border:2px solid gray;object-fit: cover;"
						/>
						<h1 class="title pb-12">Hey, I'm Amanda.</h1>
						<p class="pb-12">That's me and my dog, Prince Robert.</p>
						<p class="pb-12">
							I often find myself reflecting on seemingly mundane experiences in my daily life and
							how they can contain hidden lessons or deeper meaning. I made this space to share
							those thoughts.
						</p>
						<p>
							I designed this site as a tribute to my teenage years where I spent countless hours
							customizing layouts and blogging on LiveJournal. I wanted to create my own weird
							little corner of the internet that felt like a person actually made it, without the
							intention of being commodified.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</div>
