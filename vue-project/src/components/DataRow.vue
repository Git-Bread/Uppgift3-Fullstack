<script>
    export default {
        props: ['id','name', 'type', 'rating', 'release'],
        methods: {
            removeItem(item) {
                console.log(item);
            }
        }
    }
</script>

<template>
    <tr class="odd:bg-white even:bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="px-6 pl-2 py-2 hover:bg-zinc-400">{{id}}</td>
        <td class="px-6 pl-2 py-2 hover:bg-zinc-400">{{name}}</td>
        <td class="px-6 pl-2 py-2 hover:bg-zinc-400">{{type}}</td>
        <td class="px-6 pl-2 py-2 hover:bg-zinc-400">{{rating}}</td>
        <td class="px-6 pl-2 py-2 hover:bg-zinc-400">{{release}}</td>
        <td><button class="btn px-2 py-2 underline" @click="removeItem(this.id)">Remove</button></td>
    </tr>
</template>