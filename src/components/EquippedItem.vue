<template>
	<div
		v-on:click="select(item.slot.type)"
		:class="[
			'flex flex-wrap items-center border-b border-solid border-secondary-200-opacity-10 py-2 px-1 cursor-pointer selectable',
			{ selected: isSelected, collapsed: isCollapsed }
		]"
	>
		<span class="flex-155 text-secondary-200">{{ item.slot.name }}</span>
		<span class="flex-auto">
			{{ item.name }}
			<br />
			<ItemStat v-if="item.level" :name="statAbbreviations.LEVEL" icon="level-up-alt" :value="item.level.value" />
			<ItemStat v-if="item.item.id === 169223" :name="statAbbreviations.LEG_CLOAK" icon="level-up-alt" :value="getLegendaryCloakRank(item.level.value)" />
			<ItemStat
				v-if="item.azerite_details && item.azerite_details.level"
				:name="statAbbreviations.AZERITE"
				icon="level-up-alt"
				:value="item.azerite_details.level.value"
			/>
			<ItemStat v-if="item.armor" :name="statAbbreviations.ARMOR" icon="shield-alt" :value="item.armor.value" />
			<ItemStat
				v-for="stat in nonNegatedStats"
				v-bind:key="stat.id"
				:name="statAbbreviations[stat.type.type]"
				:icon="getIcon(stat.type.type)"
				:value="stat.value"
			/>
		</span>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ItemStat from '@/components/ItemStat.vue';
import statAbbreviations from './data/stat-abbreviations';

export default {
	name: 'EquippedItem',
	components: {
		ItemStat
	},
	props: {
		item: Object
	},
	data: function() {
		return {
			statAbbreviations: statAbbreviations
		};
	},
	methods: {
		...mapActions(['select']),
		getLegendaryCloakRank: function(ilevel) {
			return (
				{
					470: 1,
					472: 2,
					474: 3,
					476: 4,
					478: 5,
					480: 6,
					482: 7,
					484: 8,
					486: 9,
					488: 10,
					490: 11,
					492: 12,
					494: 13,
					496: 14,
					500: 15
				}[ilevel] || 0
			);
		},
		// agility, intellect, strength
		// crit rating, haste rating, mastery rating
		getIcon: function(statType) {
			return {
				AGILITY: 'route',
				INTELLECT: 'brain',
				STAMINA: 'bolt',
				STRENGTH: 'dumbbell',
				VERSATILITY: 'random',
				CRIT_RATING: 'exclamation-triangle',
				HASTE_RATING: 'running',
				MASTERY_RATING: 'graduation-cap',
				CORRUPTION: 'skull-crossbones',
				CORRUPTION_RESISTANCE: 'ban',
				COMBAT_RATING_LIFESTEAL: 'medkit',
				COMBAT_RATING_SPEED: 'stopwatch',
				COMBAT_RATING_AVOIDANCE: 'sync-alt'
			}[statType];
		}
	},
	computed: {
		...mapGetters(['selected', 'collapsed']),
		isSelected: function() {
			return this.selected.includes(this.item.slot.type);
		},
		isCollapsed: function() {
			return this.collapsed;
		},
		nonNegatedStats: function() {
			return this.item.stats ? this.item.stats.filter(({ is_negated }) => !is_negated) : [];
		}
	}
};
</script>

<style scoped></style>
