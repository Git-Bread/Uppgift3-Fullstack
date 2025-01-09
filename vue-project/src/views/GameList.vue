<script>
import {ref} from "vue";
import DataRow from "../components/DataRow.vue";
import AddForm from "../components/AddForm.vue";
let url="http://127.0.0.1:8000/api/games"

export default {
    name: "GameList",
    components: {
        DataRow,
        AddForm
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
                alert("Something went wrong! Try again later.")
            }
        }

        run();

        return {
            ObjectList,
            run
        }
    },
    methods: {
        NotifySubmission() {
            this.run();
        }
    },
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

        <section class="p-6 bg-slate-200 rounded-3xl mt-5 md:mt-0 md:ml-2 flex">
                <AddForm @submit="NotifySubmission"/>
        </section>
    </div>
</template>