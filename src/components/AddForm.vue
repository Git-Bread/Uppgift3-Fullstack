
<script>
import {ref, watch} from "vue";
    export default {
        methods: {
            //form logic
            async submit() {

                //simple validation
                if(!this.gameName || !this.gameType || !this.gameRating || !this.gameRelease) {
                    console.log("not valid form");
                    return;
                }
                this.Submitting = true;

                //api call
                try {
                    const response = await fetch('http://127.0.0.1:8000/api/games', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.gameName,
                        type: this.gameType,
                        rating: this.gameRating,
                        release: this.gameRelease
                    })
                });
                let data = await response.json();

                //response validation
                if (!response.ok) {
                    if (response.status === 422) {
                        console.log('Validation errors:', data.errors);
                        this.error = data.errors;
                    } else {
                        throw new Error('Network did not respond' + response.status);
                    }
                    this.Submitting = false;
                    return;
                }

                //error handling
                } catch (error) {
                    alert("Something went wrong, try again later or contact a system-admin");

                    this.Submitting = false;
                    return;
                }
                this.Submitting = false;

                //emiting to parent
                this.$emit('submit')
            }
        },
        setup() {
            //variables
            let gameName = ref("");
            let error = ref("");
            let gameType = ref("");
            let gameRating = ref("");
            let gameRelease = ref("");
            const Submitting = ref(false);

            //watches for validation of rating
            watch(gameRating, (value) => {
                if (value < 0) gameRating.value = 0;
                else if (value > 5) gameRating.value = 5;
                else if (value % 0.5 != 0) {
                    gameRating.value = 1;
                }
            });

            //returning variables
            return {
                gameName,
                gameType,
                gameRating,
                gameRelease,
                Submitting,
                error
            };
        }
    }
</script>
<template>
    <section class="p-6 bg-slate-200 rounded-3xl mt-5 md:mt-0 md:ml-2 flex flex-col md:flex-row">
            <div class="max-w-lg mx-auto">
                <h2 class="text-3xl text-center pb-2">Add new Game</h2>

                <!--Form with vmodels and error outpring-->
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
                    <div>
                        <p v-for="(error) in error" class="text-red-500 text-2xl italic">{{ error[0] }}</p>
                    </div>
                </form>
            </div>
            <div class="min-w-48 p-2 pt-0">
                <h2 class="text-3xl text-center pb-2">Preview:</h2>

                <!--Preview of the form using bound vmodels-->
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