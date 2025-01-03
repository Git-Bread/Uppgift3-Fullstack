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
        <td class="px-2 md:px-6 pl-2 py-2 hover:bg-zinc-300">{{id}}</td>
        <td class="px-2 md:px-6 pl-2 py-2 hover:bg-zinc-300">{{name}}</td>
        <td class="px-2 md:px-6 pl-2 py-2 hover:bg-zinc-300">{{type}}</td>
        <td class="px-2 md:px-6 pl-2 py-2 hover:bg-zinc-300">{{rating}}</td>
        <td class="px-2 md:px-6 pl-2 py-2 hover:bg-zinc-300">{{release}}</td>
        <td class="btn px-2 py-2"><button class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" @click="removeItem(this.id)">Remove</button></td>
    </tr>
</template>