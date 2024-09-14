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
            name: 'Soney',
            picture: 'https://avatars.akamai.steamstatic.com/c2a11200dc7174c539e1ba3f50820c11509e78bc_full.jpg',
            role: PlayerRole.ANCHOR,
            stats: {
              firepower: 70,
              entrying: 22,
              trading: 72,
              opening: 23,
              clutching: 50,
              sniping: 0,
              utility: 27
            }
          }"
        />

        <PlayerCard
          :player="{
            name: 'B0obai',
            picture:
              'https://avatars.akamai.steamstatic.com/ba213f020debc8191658653651ca86e28fb892c0_full.jpg',
            role: PlayerRole.SUPPORT,
            stats: {
              firepower: 83,
              entrying: 60,
              trading: 89,
              opening: 27,
              clutching: 85,
              sniping: 0,
              utility: 90
            }
          }"
          class="side-card"
        />

        <PlayerCard
          :player="{
            name: 'Mind',
            picture: 'https://avatars.akamai.steamstatic.com/078416c7db11c1d762d32a87a45aade18e9d2fe5_full.jpg',
            role: PlayerRole.LEADER,
            stats: {
              firepower: 63,
              entrying: 32,
              trading: 90,
              opening: 22,
              clutching: 21,
              sniping: 0,
              utility: 97
            }
          }"
          class="middle-card"
        />

        <PlayerCard
          :player="{
            name: 'Kannax',
            picture:
              'https://avatars.akamai.steamstatic.com/92c9427741bbfcbbc668e11617229e37a63ec91f_full.jpg',
            role: PlayerRole.SNIPER,
            stats: {
              firepower: 90,
              entrying: 12,
              trading: 61,
              opening: 72,
              clutching: 86,
              sniping: 87,
              utility: 41
            }
          }"
          class="side-card"
        />

        <PlayerCard
          :player="{
            name: 'Mike',
            picture: 'https://avatars.akamai.steamstatic.com/d724d84899399f7652b69a6742db48d56c231844_full.jpg',
            role: PlayerRole.LURKER,
            stats: {
              firepower: 83,
              entrying: 68,
              trading: 70,
              opening: 72,
              clutching: 81,
              sniping: 0,
              utility: 73
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
