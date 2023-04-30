<script>
	export let data;
</script>

<div class="flex flex-col p-10">
	{#each data.items.data as item}
		<div class="text-emerald-500">
			{item.id} - {item.attributes.name}
		</div>
	{/each}
</div>
