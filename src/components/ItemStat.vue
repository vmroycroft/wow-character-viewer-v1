<template>
	<span class="mr-4 text-xs uppercase">
		<!-- <font-awesome-icon
			v-if="icon"
			:icon="['fas', icon]"
			size="xs"
			class="orange-text stat__icon"
    />-->
		<span v-if="name" class="text-complement-100">{{ name }}</span>
		<span class="ml-1">{{ value }}</span>
	</span>
</template>

<script>
export default {
	name: 'ItemStat',
	props: {
		name: String,
		icon: String,
		value: Number
	}
};
</script>

<style scoped>
.stat__icon.fa-route {
	color: #3690ff !important;
}
.stat__icon.fa-brain {
	color: #c436ff !important;
}
.stat__icon.fa-bolt {
	color: #50ff7e !important;
}
.stat__icon.fa-dumbbell {
	color: #ff1bc3 !important;
}
.stat__icon.fa-random {
	color: #884cff !important;
}
.stat__icon.fa-exclamation-triangle {
	color: #00bef7 !important;
}
.stat__icon.fa-running {
	color: #c0ff00 !important;
}
.stat__icon.fa-graduation-cap {
	color: #ff73c7 !important;
}
.stat__icon.fa-skull-crossbones {
	color: #ba6eff !important;
}
.stat__icon.fa-ban {
	color: #00b7a6 !important;
}
.stat__icon.fa-medkit {
	color: #0ed843 !important;
}
.stat__icon.fa-stopwatch {
	color: #249fa5 !important;
}
.stat__icon.fa-sync-alt {
	color: #00ce78 !important;
}
</style>
