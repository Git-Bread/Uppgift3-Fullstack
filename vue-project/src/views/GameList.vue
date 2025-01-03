<script>
import {ref} from "vue";
import DataRow from "../components/DataRow.vue";
let url="http://127.0.0.1:8000/api/games"

export default {
    name: "GameList",
    components: {
        DataRow
    },
    setup() {
        let ObjectList = ref(["empty"]);
        async function run() {
            try {
                let newData = await getData();
                console.log(newData);
                ObjectList.value = newData;
            } catch (error) {
                console.error(error);
            }
        }

        async function getData() {
            let request = new Request(url, { method: "GET"});

            try {
                let data = await fetch(request);
                if (data.status === 200) {
                    return await data.json();
                } else {
                    throw new Error("Something went wrong!");
                }
            }
            catch(e) {
                console.log(e);
            }
        }

        run();

        return {
            ObjectList
        };
    }
}
</script>

<template>
    <div class="m-auto md:flex justify-center">
        <section class="p-6 bg-slate-200 max-w-fit rounded-3xl">
            <h1 class="text-3xl pb-2">GameList</h1>
            <div class="bg-white overflow-x-auto">
                <table class="border-separate w-full text-sm text-left rtl:text-right">
                    <thead class="bg-slate-300">
                        <tr class="border-none">
                            <th class="pl-2 px-6 py-3">Id</th>
                            <th class="pl-2 px-6 py-3">Name</th>
                            <th class="pl-2 px-6 py-3">Type</th>
                            <th class="pl-2 px-6 py-3">Rating</th>
                            <th class="pl-2 px-6 py-3">Release Date</th>
                            <th class="pl-2 px-6 py-3">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DataRow v-for="(item) in ObjectList" :id="item.id" :name="item.name" :type="item.type" :rating="item.rating + '/5'" :release="item.release" />
                    </tbody>
                </table>
            </div>
        </section>

        <section class="p-6 bg-slate-200 rounded-3xl mt-5 md:mt-0 md:ml-2 ">
            <div class="max-w-lg mx-auto">
                <h2 class="text-3xl text-center pb-2">Add new Game</h2>
                
                <form id="gameForm" class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="mb-4">
                        <label for="gameName" class="block text-sm font-medium text-gray-700">Name</label>
                        <input
                        type="text"
                        id="gameName"
                        required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                        <input
                        type="text"
                        id="type"
                        required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="rating" class="block text-sm font-medium text-gray-700">Rating</label>
                        <input
                        type="text"
                        id="rating"
                        required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="release" class="block text-sm font-medium text-gray-700">Release</label>
                        <input
                        type="text"
                        id="release"
                        required
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div class="text-center">
                        <button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>