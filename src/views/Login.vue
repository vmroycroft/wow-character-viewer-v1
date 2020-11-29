<template>
	<div
		class="h-screen w-screen bg-cover bg-no-repeat bg-center bg-fixed"
		:style="{
			backgroundImage: `url(${require('../assets/img/login.jpg')})`
		}"
	>
		<div class="flex flex-col justify-start items-center pt-24 md:pt-32">
			<h1
				class="text-8xl md:text-12xl lg:text-14xl leading-none font-display font-black text-gray-1200 opacity-70"
			>
				WoW
			</h1>
			<h2
				class="text-3xl md:text-6xl lg:text-7xl leading-none font-display text-gray-100"
			>
				Character Viewer
			</h2>
			<p class="text-gray-100 mt-24 px-4">
				A World of Warcraft character viewer website.
			</p>
			<Button :onClick="login" class="mt-10">
				<img src="../assets/img/bliz.png" class="inline-block -mt-1 pr-4" />
				Sign in with Blizzard
			</Button>
		</div>
		<div class="absolute inset-x-0 bottom-0 text-center">
			<a
				href="https://github.com/vmroycroft"
				target="_blank"
				title="View project on Github"
				><img src="../assets/img/github.png" class="inline-block pb-4"
			/></a>
		</div>
	</div>
</template>

<script>
	import Button from "@/components/Button.vue";

	export default {
		name: "login",
		components: { Button },
		data: function() {
			return {
				loginUrl: `${process.env.VUE_APP_LOGIN_URL}`
			};
		},
		methods: {
			login() {
				window.location.href = this.loginUrl;
			}
		}
	};
</script>

<style scoped>
	.btn > img {
		display: inline-block;
		margin-top: -3px;
		margin-right: 12px;
	}
</style>
