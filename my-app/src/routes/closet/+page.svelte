<script>
	import ClothingPieceGallery from "$lib/ClothingPieceGallery.svelte";
</script>
<svelte:head>
  <title>fitmaster - closet</title>
</svelte:head>
<div class=" flex justify-center text-center">
	<article class=" text-center prose justify-center items-center pl-1 pr-1">
		<h1>project fitmaster</h1>
		<p>
			fitmaster-closet allows user to see all of their clothing. please navigate through
            all of the clothing types to that with which is available during outfit building
		</p>
		<a href="./">
			<button class="btn">build fit</button>
		  </a>
	</article>
</div>

<div class="divider">tops</div>
<ClothingPieceGallery type="tops"/>
<div class="divider">bottoms</div>
<ClothingPieceGallery type="bottoms"/>
<div class="divider">shoes</div>
<ClothingPieceGallery type="shoes"/>
