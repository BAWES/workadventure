<script lang="ts">
    import { TodoTaskInterface } from "@workadventure/shared-utils";
    export let task: TodoTaskInterface;
</script>

<div class="flex flex-col text-left p-2 hover:border-white hover:border hover:border-solid">
    <p class="text-lg m-0 p-0" class:line-through={task.status === "completed"}>
        {task.title}
        {#if task.end}<span class="text-sm">({task.end.toLocaleDateString()})</span>{/if}
    </p>
    {#if task.status !== "completed"}
        {#if task.description}
            <p class="text-sm m-0 p-0 py-1">Description: {task.description}</p>
        {/if}
        {#if task.start}
            <p class="text-xs m-0 p-0">Due date: {task.start.toLocaleDateString()}</p>
        {/if}
        {#if task.end}
            <p class="text-xs m-0 p-0">Complete: {task.end.toLocaleDateString()}</p>
        {/if}
        {#if task.recurence}
            <p class="text-xs m-0 p-0">Repeat: {task.recurence}</p>
        {/if}
    {/if}
</div>
