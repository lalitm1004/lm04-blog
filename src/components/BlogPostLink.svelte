<script lang="ts">
    import type { CollectionEntry } from "astro:content";
    import { Button, Separator } from "bits-ui";
    import RenderTags from "./RenderTags.svelte";

    type Blog = CollectionEntry<"blog">;

    let { blog }: { blog: Blog } = $props();
    const safeTags = $derived(blog.data.blog_tags ?? []);
</script>

<li
    class={`hover:bg-stone-800/50 md:px-4 px-2 py-2 rounded-md transition-colors duration-200`}
>
    <Button.Root
        class={`h-full w-full`}
        href={`/${blog.id}`}
        data-astro-prefetch={`hover`}
    >
        <time
            class={`text-stone-500`}
            datetime={blog.data.publish_date.toISOString()}
        >
            {blog.data.publish_date.toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "2-digit",
            })}
        </time>

        <hgroup>
            <h4 class={`font-amulya font-bold text-xl`}>
                {blog.data.title}
            </h4>
            <p class={`text-sm`}>{blog.data.description}</p>
        </hgroup>

        <RenderTags tags={safeTags} />
    </Button.Root>
</li>

<Separator.Root
    orientation={`horizontal`}
    class={`bg-stone-800 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full`}
/>
