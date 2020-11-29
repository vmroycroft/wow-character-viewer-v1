<template>
	<div
		class="h-screen w-screen bg-cover bg-no-repeat bg-center fixed overflow-auto"
		:style="{
			backgroundImage: `url(${require('../assets/img/home.jpg')})`
		}"
	>
		<div class="w-11/12 mx-auto min-h-screen pt-6">
			<div class="flex flex-wrap">
				<input type="checkbox" id="gear" value="Gear" v-model="filter.gear" />
				<label for="gear" class="text-gray-100 mr-8">Gear</label>
				<input
					type="checkbox"
					id="reputation"
					value="Reputation"
					v-model="filter.reputation"
				/>
				<label for="reputation" class="text-gray-100">Reputation</label>

				<span class="flex-grow text-right text-gray-100">
					<!-- <font-awesome-icon :icon="['fas', 'user']" class="text-orange-500 mr-1" /> -->
					{{ user.battletag }}
				</span>
				<button class="btn" v-on:click="logouts">Logout</button>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 col-gap-8 mt-6">
				<Character v-for="c in characters" v-bind:key="c.id" :data="c" />
			</div>
		</div>
		<div class="text-center p-6 bg-secondary-600 text-gray-700 text-sm">
			<div>WoW Character Viewer {{ version }}</div>
			<div>Designed & Built by Vanessa Roycroft</div>
			<a
				href="https://github.com/vmroycroft"
				target="_blank"
				title="View project on Github"
				><img src="../assets/img/github.png" class="inline-block mt-2"
			/></a>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import Character from "@/components/Character.vue";

	export default {
		name: "home",
		components: {
			Character
		},
		data() {
			return {
				version: process.env.VUE_APP_VERSION
			};
		},
		methods: {
			...mapActions(["fetchCharacters", "logout"]),
			logouts() {
				this.logout();
				// TODO put session checking in Login.vue
				this.$router.push("/");
			}
		},
		computed: {
			...mapGetters(["user", "characters", "filter"])
		},
		created() {
			this.fetchCharacters();
		}
	};
</script>

<style scoped></style>
