<script setup lang="ts">

</script>

<template>
    <div class="w-full flex items-center justify-center mb-32 mt-16">
        <transition name="fade" appear>
            <span class="text-transparent text-end font-bold akira-expanded w-1/6">MyEvolution</span>
        </transition>
        <transition name="fade" appear>
            <i class="icon icon--myevo icon--header mx-6"></i>
        </transition>
        <transition name="fade" appear>
            <span class="text-transparent text-start font-bold akira-expanded w-1/6">MojaEvolujica</span>
        </transition>
    </div>
</template>

<style scoped>
.akira-expanded {
    font-family: 'Akira Expanded', sans-serif;
    -webkit-text-stroke: 0.5px white;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.7s ease-in, transform 0.7s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>