<template>
	<div class="backdrop-blur-dark text-gray-100 mb-8">
		<Profile :avatarUrl="data.avatarUrl" :name="data.name" :level="data.level" :averageItemLevel="data.averageItemLevel" />
		<div class="px-4 pb-4">
			<div class="float-right">
				<font-awesome-icon :icon="['far', 'minus-square']" class="text-tertiary-300 my-2 mx-1 cursor-pointer" v-on:click="collapse()" />
				<font-awesome-icon :icon="['far', 'plus-square']" class="text-tertiary-300 my-2 mx-1 cursor-pointer" v-on:click="expand()" />
				<font-awesome-icon :icon="['far', 'window-close']" class="text-tertiary-300 my-2 mx-1 cursor-pointer" v-on:click="clear()" />
			</div>
			<Gear :equipped="data.equipped" v-show="filter.gear" />
			<Reputation :reputations="data.reputations" v-show="filter.reputation" />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Profile from '@/components/Profile.vue';
import Gear from '@/components/Gear.vue';
import Reputation from '@/components/Reputation.vue';

export default {
	name: 'Character',
	components: {
		Profile,
		Gear,
		Reputation
	},
	props: {
		data: Object
	},
	methods: {
		...mapActions(['clear', 'collapse', 'expand'])
	},
	computed: {
		...mapGetters(['filter'])
	}
};
</script>

<style scoped></style>
