<script lang="ts">
    let { tags }: { tags: string[] } = $props();
    const { sortedTags } = $derived.by(() => {
        const lowercased = tags.map((tag) => tag.toLowerCase());
        const sorted = lowercased.sort((a, b) => a.localeCompare(b));
        return { sortedTags: sorted };
    });
</script>

{#if sortedTags}
    <ul class={`max-w-full flex flex-wrap gap-2 mt-2`}>
        {#each sortedTags as tag}
            <li
                class={`border-2 border-stone-600 px-3 py-1 rounded-full text-xs`}
            >
                {tag}
            </li>
        {/each}
    </ul>
{/if}
