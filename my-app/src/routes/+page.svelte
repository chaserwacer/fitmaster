<script lang="ts">
	import SingleItemViewer from '$lib/ClothingPieceGallery.svelte';
	import { onMount } from 'svelte';

	let tops: string[] = [];
	let currentTopIndex = 0;
	let currentTop = '';

	let bottoms: string[] = [];
	let currentBottomIndex = 0;
	let currentBottom = '';

	let shoes: string[] = [];
	let currentShoeIndex = 0;
	let currentShoe = '';

	onMount(async () => {
		// Fetch the list of images from the static folder
		var url = '/tops' + '/images.json';
		let response = await fetch(url);
		tops = await response.json();
		

		url = '/bottoms' + '/images.json';
		response = await fetch(url);
		bottoms = await response.json();
		

		url = '/shoes' + '/images.json';
		response = await fetch(url);
		shoes = await response.json();

		randomImage()
		
	});

	function randomImage() {
		currentBottomIndex = Math.floor(Math.random() * bottoms.length - 1) + 1;
		currentBottom = bottoms[currentBottomIndex];

		currentShoeIndex = Math.floor(Math.random() * shoes.length - 1) + 1;
		currentShoe = shoes[currentShoeIndex];
		currentTopIndex = Math.floor(Math.random() * tops.length - 1) + 1;
		currentTop = tops[currentTopIndex];

		
	}

	function NextTop() {
      currentTopIndex = (currentTopIndex + 1) % tops.length;
      currentTop = tops[currentTopIndex];
    }

	function NextBottom() {
      currentBottomIndex = (currentBottomIndex + 1) % bottoms.length;
      currentBottom = bottoms[currentBottomIndex];
    }

	function NextShoe() {
      currentShoeIndex = (currentShoeIndex + 1) % shoes.length;
      currentShoe = shoes[currentShoeIndex];
    }
</script>

<svelte:head>
	<title>fitmaster</title>
</svelte:head>
<div class="flex flex-row justify-center  ">
	<div class="flex flex-col items-center text-center  w-1/3">
		<article class=" text-center prose justify-center items-center p-5">
			<h1>project fitmaster</h1>
			<p>
				fitmaster enables user to cycle through all of their clothes via clicking on each clothing
				type. please create an outfit below via mixing and matching.
			</p>
			<a href="/closet">
				<button class="btn btn-primary">view closet</button>
			</a>
		</article>
		<div class="divider ml-5"></div>
		<button class="btn w-36 btn-neutral" on:click={randomImage}>randomize all</button>
		<button class="btn w-36 mt-2" on:click={NextTop}>next top</button>
		<button class="btn w-36 mt-2" on:click={NextBottom}>next bottom</button>
		<button class="btn w-36 mt-2" on:click={NextShoe}>next shoe</button>
	</div>
	<div class="divider divider-horizontal"></div>
	<div class=" w-2/3 flex flex-col justify-center text-center items-center mt-5">
		<button type="button" class="size-72" on:click={NextTop}>
			<img src={`/tops/${currentTop}`} alt="Clothing Item: Top">
		</button>
		
		<button type="button" class="ml-15 size-72" on:click={NextBottom}>
			<img src={`/bottoms/${currentBottom}`} alt="Clothing Item: Bottom">
		</button>
		
		<button type="button" class="size-60 " on:click={NextShoe}>
			<img src={`/shoes/${currentShoe}`} alt="Clothing Item: Shoe">
		</button>
		
	</div>
</div>
