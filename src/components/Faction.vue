<template>
	<div
		v-on:click="select(id)"
		:class="[
			'flex flex-wrap items-center border-b border-solid border-secondary-200-opacity-10 py-2 px-1 cursor-pointer selectable',
			{ selected: isSelected, collapsed: isCollapsed }
		]"
	>
		<span class="flex-230 text-secondary-200">{{ name }}</span>
		<span class="flex-150"> {{ standing }}</span>
		<span v-if="max !== 0" class="flex-auto">{{ value }} / {{ max }}</span>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'Faction',
	props: {
		id: Number,
		name: String,
		standing: String,
		value: Number,
		max: Number
	},
	methods: {
		...mapActions(['select'])
	},
	computed: {
		...mapGetters(['selected', 'collapsed']),
		isSelected: function() {
			return this.selected.includes(this.id);
		},
		isCollapsed: function() {
			return this.collapsed;
		},
		getStandingImage: function() {
			return `./img/reputation/${this.standing}.png`;
		}
	}
};
</script>

<style scoped></style>
