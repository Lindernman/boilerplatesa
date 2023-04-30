<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<a href="/" class=""> Home</a>
	<a href="/andrei" class=""> Andrei</a>
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>


<slot />
