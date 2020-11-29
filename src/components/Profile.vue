<template>
	<div class="flex items-center backdrop-blur-light mb-4 p-4">
		<img class="max-width-md h-auto rounded-full" :src="avatarUrl" />
		<div class="pl-4">
			<h1 class="text-5xl leading-none font-display">{{ name }}</h1>
			<div>
				<ItemStat v-if="level" :name="statAbbreviations.CHAR_LEVEL" icon="level-up-alt" :value="level" />
				<ItemStat v-if="averageItemLevel" :name="statAbbreviations.AVG_ITEM_LEVEL" icon="box-open" :value="averageItemLevel" />
			</div>
		</div>
	</div>
</template>

<script>
import ItemStat from '@/components/ItemStat.vue';
import statAbbreviations from './data/stat-abbreviations';

export default {
	name: 'Profile',
	components: {
		ItemStat
	},
	data: function() {
		return {
			statAbbreviations: statAbbreviations
		};
	},
	props: {
		avatarUrl: String,
		name: String,
		level: Number,
		averageItemLevel: Number
	}
};
</script>

<style scoped></style>
