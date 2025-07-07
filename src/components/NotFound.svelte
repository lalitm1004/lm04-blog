<script lang="ts">
    import { Button } from "bits-ui";
</script>

<main class={`flex-grow flex flex-col justify-center items-center gap-3`}>
    <hgroup class={`flex flex-col items-center font-amulya font-bold text-2xl`}>
        <p>404</p>
        <h1>Page Not Found</h1>
    </hgroup>

    <Button.Root
        href={`/`}
        class={`py-2 px-4 border-2 border-stone-900 rounded-full hover:bg-stone-900/50 active:scale-[0.98] transition-all duration-200`}
    >
        Go Home
    </Button.Root>
</main>
