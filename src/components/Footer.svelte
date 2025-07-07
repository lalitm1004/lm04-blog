<script lang="ts">
    import { Button } from "bits-ui";

    const externalAnchors = [
        {
            idx: 0,
            display: "Github",
            href: "https://github.com/lalitm1004",
        },
        {
            idx: 1,
            display: "LinkedIn",
            href: "https://www.linkedin.com/in/lalitm1004",
        },
        {
            idx: 2,
            display: "Portfolio",
            href: "https://lalit.is-a.dev",
        },
    ];
</script>

<footer class={`flex flex-col justify-center items-center pb-4`}>
    <ul class={`flex text-md`}>
        {#each externalAnchors as anchor (anchor.idx)}
            <li class={`group flex`}>
                <Button.Root
                    class={`font-medium group-hover:underline underline-offset-2`}
                    href={anchor.href}
                    target={"_blank"}
                    rel={`noopener noreferrer`}
                >
                    {anchor.display}
                </Button.Root>

                {#if anchor.idx !== externalAnchors.length - 1}
                    <p class={`mx-2`}>|</p>
                {/if}
            </li>
        {/each}
    </ul>

    <p class={`text-xs text-stone-600`}>
        © 2025 Lalit Maurya. All rights reserved.
    </p>
</footer>
