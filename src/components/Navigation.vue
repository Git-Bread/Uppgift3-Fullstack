<!-- Navigation using the router-link functionality-->
<template>
    <header class="flex flex-col md:flex-row justify-around bg-gray-800 pt-2 border-b-2 border-indigo-700">
        <div>
            <h1 class="rounded-md px-3 py-2 text-4xl text-gray-300 pb-5">Uppgift-3</h1>
        </div>
        <nav class="md:flex">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-2 m-auto">
                <div class="flex flex-1 justify-center sm:items-stretch sm:justify-end">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <router-link to="/" class="rounded-md px-3 py-2 text-sm font-medium text-white" activeClass="bg-gray-900" >Home</router-link>
                            <router-link to="/games" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClass="bg-gray-900">GamesList</router-link>
                            <router-link to="/reflections" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClass="bg-gray-900">Reflections</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-0 pb-3 pt-0">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <router-link to="/" class="block rounded-md px-3 py-2 text-base font-medium text-white" activeClass="bg-gray-700">Home</router-link>
                    <router-link to="/games" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClass="bg-gray-900">GamesList</router-link>
                    <router-link to="/reflections" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" activeClass="bg-gray-900">Reflections</router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

