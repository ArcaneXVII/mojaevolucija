<script setup lang="ts">
import PlayerCard from './PlayerCard.vue'
import { PlayerRole } from '@/core/player'
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const showAllCards = ref(false)

onMounted(() => {
  isVisible.value = true
})

const toggleView = () => {
  console.log('toggleView', showAllCards.value)
  showAllCards.value = !showAllCards.value
}
</script>

<template>
  <div class="w-full">
    <Transition name="fade-slide">
      <div v-if="isVisible" class="card-container" :class="{ 'show-all': showAllCards }">
        <PlayerCard
          :player="{
            name: 'Tiqid',
            picture: 'images/Waterman.jpg',
            role: PlayerRole.ANCHOR,
            stats: {
              firepower: 75,
              entrying: 70,
              trading: 80,
              opening: 75,
              clutching: 42,
              sniping: 31,
              utility: 61
            }
          }"
        />

        <PlayerCard
          :player="{
            name: 'JustKidding',
            picture: 'images/Demidemi.png',
            role: PlayerRole.SUPPORT,
            stats: {
              firepower: 63,
              entrying: 43,
              trading: 60,
              opening: 35,
              clutching: 82,
              sniping: 18,
              utility: 69
            }
          }"
          class="side-card"
        />

        <PlayerCard
          :player="{
            name: 'Mind',
            picture: 'images/KassadIsWatching.jpg',
            role: PlayerRole.LEADER,
            stats: {
              firepower: 54,
              entrying: 50,
              trading: 67,
              opening: 35,
              clutching: 52,
              sniping: 13,
              utility: 78
            }
          }"
          class="middle-card"
        />

        <PlayerCard
          :player="{
            name: 'Kannax',
            picture: 'images/KenyanMan.PNG',
            role: PlayerRole.SNIPER,
            stats: {
              firepower: 81,
              entrying: 33,
              trading: 67,
              opening: 58,
              clutching: 72,
              sniping: 89,
              utility: 54
            }
          }"
          class="side-card"
        />

        <PlayerCard
          :player="{
            name: 'Boobai',
            picture: 'images/PillMan.JPG',
            role: PlayerRole.LURKER,
            stats: {
              firepower: 100,
              entrying: 32,
              trading: 57,
              opening: 65,
              clutching: 82,
              sniping: 13,
              utility: 72
            }
          }"
        />
      </div>
    </Transition>

    <Transition name="fade">
      <div v-show="isVisible" class="w-full flex justify-center mt-36">
        <button @click="toggleView" class="hover:text-white transition-all duration-300">
          {{ showAllCards ? 'Hide Players' : 'Show All Players' }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style>
.card-container {
  width: 70vw;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.card-stats {
  width: 100%;
  height: 50%;
  padding: 8px;
}

.card:hover {
  filter: brightness(1);
  transform: translateZ(7vw);
  background-color: #000000bd;
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

  .card-content {
    opacity: 1;
  }
}

.card:hover .card-icon {
  opacity: 0;
}

.card:hover + * {
  transform: translateZ(100px) rotateY(20deg);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  opacity: 0.7;
}

.card:hover + * + * {
  transform: translateZ(30px) rotateY(10deg);
}

.card:has(+ *:hover) {
  transform: translateZ(100px) rotateY(-20deg);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  opacity: 0.7;
}

.card:has(+ * + *:hover) {
  transform: translateZ(30px) rotateY(-10deg);
}

.card-icon {
  transition: 0.5s;
  position: absolute;
  background-color: #ffffff;
}

.bg-icon {
  width: 15vw;
  height: 15vw;
}

.card-container.show-all .card {
  opacity: 1;
  background-color: #000000bd;
}

.card-container.show-all .card .card-content {
  opacity: 1;
}

.card-container.show-all .card .card-icon {
  opacity: 0;
}

.toggle-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.toggle-button:hover {
  background-color: #555;
}
</style>
