<script setup lang="ts">
import type { Player } from '@/core/player';

const props = defineProps<{
	player: Player
}>();

const getStatColor = (stat: number) => {
	if (stat >= 100) return '#D52EFF';
	if (stat >= 80) return '#90FF30';
	if (stat >= 60) return '#C7D400';
	if (stat >= 40) return '#E9A400';
	if (stat >= 20) return '#FD6B00';
	return '#FF002F';
};

</script>

<template>
	<div class="card gradient-black overflow-hidden">
		<i class="icon card-icon" :class="{
			'icon--leader': props.player.role === 'Leader',
			'icon--lurker': props.player.role === 'Lurker',
			'icon--sniper': props.player.role === 'Sniper',
			'icon--support': props.player.role === 'Support',
			'icon--anchor': props.player.role === 'Anchor'
		}"></i>
		<div class="card-content">
			<div class="w-full h-1/2 flex flex-col items-center justify-end">
				<img :src="props.player.picture"
					class="w-[6vw] h-[6vw] object-cover object-center rounded-full mb-3 bg-evo-gray z-10" alt="Player">
				<div class="rounded-full text-white text-center text-3xl relative flex items-center justify-center">
					<span class="z-10">{{ props.player.name }}</span>
					<i class="icon absolute bg-icon" :class="{
						'icon--leader gradient-leader': props.player.role === 'Leader',
						'icon--lurker gradient-lurker': props.player.role === 'Lurker',
						'icon--sniper gradient-sniper': props.player.role === 'Sniper',
						'icon--support gradient-support': props.player.role === 'Support',
						'icon--anchor gradient-anchor': props.player.role === 'Anchor'
					}"></i>
				</div>
			</div>
			<div class="card-stats flex flex-col justify-center relative z-10">
				<div class="w-full h-1/4">
					<div class="flex justify-between">
						<span>Firepower</span>
						<span :style="{ color: getStatColor(props.player.stats.firepower) }">
							{{ props.player.stats.firepower }}
						</span>
					</div>

					<div class="w-full h-1 rounded-full bg-evo-gray">
						<div class="h-1 bg-white rounded-full" :style="{ width: `${props.player.stats.firepower}%` }">
						</div>
					</div>
				</div>
				<div>
					<div class="flex justify-between w-full mb-3">
						<div class="w-2/5">
							<div class="flex justify-between items-center">
								<span class="text-xs font-light">Entrying</span>
								<span class="text-white">
									{{ props.player.stats.entrying }}
								</span>
							</div>
							<div class="w-full h-1 rounded-full overflow-hidden relative">
								<div class="h-1 w-full rounded-full gradient-base absolute inset-0"></div>
								<div class="h-1 rounded-full bg-white absolute inset-0"
									:style="{ width: `${props.player.stats.entrying}%` }"></div>
								<div class="h-1 w-full rounded-full gradient-line absolute inset-0"></div>
							</div>
						</div>

						<div class="w-2/5">
							<div class="flex justify-between items-center">
								<span class="text-xs font-light">Trading</span>
								<span class="text-white">
									{{ props.player.stats.trading }}
								</span>
							</div>
							<div class="w-full h-1 rounded-full overflow-hidden relative">
								<div class="h-1 w-full rounded-full gradient-base absolute inset-0"></div>
								<div class="h-1 rounded-full bg-white absolute inset-0"
									:style="{ width: `${props.player.stats.trading}%` }"></div>
								<div class="h-1 w-full rounded-full gradient-line absolute inset-0"></div>
							</div>
						</div>
					</div>

					<div class="flex justify-between w-full mb-3">
						<div class="w-2/5">
							<div class="flex justify-between items-center">
								<span class="text-xs font-light">Opening</span>
								<span class="text-white">
									{{ props.player.stats.opening }}
								</span>
							</div>
							<div class="w-full h-1 rounded-full overflow-hidden relative">
								<div class="h-1 w-full rounded-full gradient-base absolute inset-0"></div>
								<div class="h-1 rounded-full bg-white absolute inset-0"
									:style="{ width: `${props.player.stats.opening}%` }"></div>
								<div class="h-1 w-full rounded-full gradient-line absolute inset-0"></div>
							</div>
						</div>

						<div class="w-2/5">
							<div class="flex justify-between items-center">
								<span class="text-xs font-light">Clutching</span>
								<span class="text-white">
									{{ props.player.stats.clutching }}
								</span>
							</div>
							<div class="w-full h-1 rounded-full overflow-hidden relative">
								<div class="h-1 w-full rounded-full gradient-base absolute inset-0"></div>
								<div class="h-1 rounded-full bg-white absolute inset-0"
									:style="{ width: `${props.player.stats.clutching}%` }"></div>
								<div class="h-1 w-full rounded-full gradient-line absolute inset-0"></div>
							</div>
						</div>
					</div>

					<div class="flex justify-between w-full">
						<div class="w-2/5">
							<div class="flex justify-between items-center">
								<span class="text-xs font-light">Sniping</span>
								<span class="text-white">
									{{ props.player.stats.sniping }}
								</span>
							</div>
							<div class="w-full h-1 rounded-full overflow-hidden relative">
								<div class="h-1 w-full rounded-full gradient-base absolute inset-0"></div>
								<div class="h-1 rounded-full bg-white absolute inset-0"
									:style="{ width: `${props.player.stats.sniping}%` }"></div>
								<div class="h-1 w-full rounded-full gradient-line absolute inset-0"></div>
							</div>
						</div>

						<div class="w-2/5">
							<div class="flex justify-between items-center">
								<span class="text-xs font-light">Utility</span>
								<span class="text-white">
									{{ props.player.stats.utility }}
								</span>
							</div>
							<div class="w-full h-1 rounded-full overflow-hidden relative">
								<div class="h-1 w-full rounded-full gradient-base absolute inset-0"></div>
								<div class="h-1 rounded-full bg-white absolute inset-0"
									:style="{ width: `${props.player.stats.utility}%` }"></div>
								<div class="h-1 w-full rounded-full gradient-line absolute inset-0"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	width: 13vw;
	height: 20vw;
	border-radius: 25px;
	transition: .5s;
	opacity: 0.5;
	display: flex;
	justify-content: center;
	align-items: center;
}

.card-content {
	opacity: 0;
	transition: .5s;
	width: 100%;
	height: 100%;
	padding: 20px;
}

.gradient-line {
	background-image: repeating-linear-gradient(to right, transparent 0 17%, rgb(0, 0, 0) 17% 20.75%);
}

.gradient-base {
	background-image: repeating-linear-gradient(to right, rgb(58, 58, 58) 0 17%, transparent 17% 20.75%);
}
</style>
