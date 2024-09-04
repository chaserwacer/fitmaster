<script lang="ts">
    import { onMount } from 'svelte';
    
    export let type:string;
    let images : string[] = [];
    let currentIndex = 0;
    let currentImage = '';
  
    onMount(async () => {
      // Fetch the list of images from the static folder
      var url = '/' + type + '/images.json';
      const response = await fetch(url);
      images = await response.json();
      currentImage = images[currentIndex];
    });
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      currentImage = images[currentIndex];
    }
  
    function showPreviousImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      currentImage = images[currentIndex];
    }

    function randomImage(){
        currentIndex = Math.floor(Math.random() * images.length-1) + 1
        currentImage = images[currentIndex];
    }
  </script>
 
  
  <div class="">
    {#if currentImage}
      <!-- <img src={`/${type}/${currentImage}`} alt="Gallery Image" on:click={showNextImage}> -->
      
    {/if}
  </div>
  