<script lang="ts">
    import { onMount } from 'svelte';
    
    export let type:string;
    let images : string[] = [];
    let currentImage = '';
  
    onMount(async () => {
      // Fetch the list of images from the static folder
      var url = '/' + type + '/images.json';
      const response = await fetch(url);
      images = await response.json();
      
    });
  
  </script>
 
  
  <div class="flex flex-wrap justify-center">
    {#each images as image}
    <div class="w-48 shrink">
      <img src={`/${type}/${image}`} alt="{type} Image">
    </div>
      
      
    {/each}
  </div>
  