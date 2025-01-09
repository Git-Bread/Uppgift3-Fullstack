
<script>
import {ref, watch} from "vue";
    export default {
        methods: {
            async submit() {
                if(!this.gameName || !this.gameType || !this.gameRating || !this.gameRelease) {
                    console.log("not valid form");
                    return;
                }
                this.Submitting = true;
                try {
                    const response = await fetch('http://127.0.0.1:8000/api/games', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        gameName: this.gameName,
                        gameType: this.gameType,
                        gameRating: this.gameRating,
                        gameRelease: this.gameRelease
                    })
                });
                if (!response.ok) {
                    throw new Error('Network did not respond' + response.status);
                }
                const data = await response.json();

                } catch (error) {
                    alert("Something went wrong, try again later or contact a system-admin")
                    console.log(error);
                }
                this.Submitting = false;
                this.$emit('submit', this)
            }
        },
        setup() {
            let gameName = ref("");
            let gameType = ref("");
            let gameRating = ref("");
            let gameRelease = ref("");
            const Submitting = ref(false);

            watch(gameRating, (value) => {
                if (value < 0) gameRating.value = 0;
                else if (value > 5) gameRating.value = 5;
                else if (value % 0.5 != 0) {
                    gameRating.value = 1;
                }
            });

            return {
                gameName,
                gameType,
                gameRating,
                gameRelease,
                Submitting
            };
        }
    }
</script>
<template>
    <section class="p-6 bg-slate-200 rounded-3xl mt-5 md:mt-0 md:ml-2 flex">
            <div class="max-w-lg mx-auto">
                <h2 class="text-3xl text-center pb-2">Add new Game</h2>
                <form class="bg-white p-6 rounded-lg shadow-lg" onsubmit="this.reset(); return false;">
                    <div class="mb-4">
                        <label for="gameName" class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" v-model="gameName" id="gameName" required class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                    </div>
                    <div class="mb-4">
                        <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                        <input type="text" v-model="gameType" id="type" required class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                    </div>
                    <div class="mb-4">
                        <label for="rating" class="block text-sm font-medium text-gray-700">Rating (0-5, increments of 0.5)</label>
                        <input type="number" min="0" max="5" v-model="gameRating" step="0.5" id="rating" require class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                    </div>
                    <div class="mb-4">
                        <label for="release" class="block text-sm font-medium text-gray-700">Release</label>
                        <input type="date" v-model="gameRelease" id="release" required class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                    </div>
                    <div class="text-center">
                        <button type="submit" @click="submit" :disabled="Submitting" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">  {{ Submitting ? "Adding.." : "Submit" }}</button>
                    </div>
                </form>
            </div>
            <div class="min-w-48 p-2 pt-0">
                <h2 class="text-3xl text-center pb-2">Preview:</h2>
                <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto h-fit">
                    <div>
                        <h3>Name:</h3>
                        <p>{{ gameName }}</p>
                    </div>
                    <div>
                        <h3>Type:</h3>
                        <p>{{ gameType }}</p>
                    </div>
                    <div>
                        <h3>Rating:</h3>
                        <p>{{ gameRating }}</p>
                    </div>
                    <div>
                        <h3>Release:</h3>
                        <p>{{ gameRelease }}</p>
                    </div>
                </div>
            </div>
        </section>
</template>