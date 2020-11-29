<template>
	<section>
		<h2 class="text-3xl font-display text-primary-100 mt-6">
			Reputation
		</h2>
		<div class="ml-2">
			<Faction
				v-for="r in reputations"
				v-bind:key="r.faction.id"
				:id="r.faction.id"
				:name="r.faction.name"
				:standing="r.standing.name"
				:value="r.standing.value"
				:max="r.standing.max"
			/>
		</div>
	</section>
</template>

<script>
import Faction from '@/components/Faction.vue';

export default {
	name: 'Reputation',
	components: {
		Faction
	},
	props: {
		reputations: Array
	}
};
</script>

<style scoped></style>
