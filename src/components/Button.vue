<template>
	<button
		v-on:click="onClick"
		class="button text-gray-400 border-4 border-solid border-gray-1200 cursor-pointer transition-all duration-300 hover:bg-gray-1200"
	>
		<span class="button__inner bg-gray-1200 p-4 m-1 inline-block">
			<slot></slot>
		</span>
	</button>
</template>

<script>
	export default {
		name: "Button",
		props: {
			onClick: Function
		}
	};
</script>

<style scoped>
	/* TODO add group-active varient (see https://github.com/benface/tailwindcss-interaction-variants)*/
	.button:active {
		@apply bg-black border-black;
	}

	.button:active .button__inner {
		@apply bg-black;
	}
</style>
