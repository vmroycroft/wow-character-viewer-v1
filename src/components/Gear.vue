<template>
	<section>
		<h2 class="text-3xl font-display text-primary-100">Gear</h2>
		<div class="ml-2">
			<div>
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'HEAD')" :item="equipped.find(e => e.slot.type === 'HEAD')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'NECK')" :item="equipped.find(e => e.slot.type === 'NECK')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'SHOULDER')" :item="equipped.find(e => e.slot.type === 'SHOULDER')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'BACK')" :item="equipped.find(e => e.slot.type === 'BACK')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'CHEST')" :item="equipped.find(e => e.slot.type === 'CHEST')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'SHIRT')" :item="equipped.find(e => e.slot.type === 'SHIRT')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'WRIST')" :item="equipped.find(e => e.slot.type === 'WRIST')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'HANDS')" :item="equipped.find(e => e.slot.type === 'HANDS')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'WAIST')" :item="equipped.find(e => e.slot.type === 'WAIST')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'LEGS')" :item="equipped.find(e => e.slot.type === 'LEGS')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'FEET')" :item="equipped.find(e => e.slot.type === 'FEET')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'FINGER_1')" :item="equipped.find(e => e.slot.type === 'FINGER_1')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'FINGER_2')" :item="equipped.find(e => e.slot.type === 'FINGER_2')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'TRINKET_1')" :item="equipped.find(e => e.slot.type === 'TRINKET_1')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'TRINKET_2')" :item="equipped.find(e => e.slot.type === 'TRINKET_2')" />
				<EquippedItem v-if="equipped.find(e => e.slot.type === 'MAIN_HAND')" :item="equipped.find(e => e.slot.type === 'MAIN_HAND')" />
			</div>
		</div>
	</section>
</template>

<script>
import EquippedItem from '@/components/EquippedItem.vue';

export default {
	name: 'Gear',
	components: {
		EquippedItem
	},
	props: {
		equipped: Array
	}
};
</script>

<style scoped></style>
