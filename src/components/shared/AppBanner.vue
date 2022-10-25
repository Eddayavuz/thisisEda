<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
			imgPadding: 50,
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};



</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/3 text-left">
			<h1
				class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
			>
				Hi, this is Eda 🌱
			</h1>
			<p
				class="font-general-regular mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
			>
			Proud gradute of <a href="https://www.vuevixens.org/" style="color:coral">Frontend Foxes School 🦊</a> </p>
			<p
			class="text-center sm:text-left leading-none text-gray-400"			
			>Click <a href="https://credential.certifyme.online/verify/155511fb3744" target="_blank">🎓 </a>to see my certificate!</p>
			
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/3">
			<img src="@/assets/images/hi.png" alt="A bitmoji of Eda." :style="{ padding: imgPadding + 'px'}"
			/>

		</div>
	</section>
</template>

<style scoped></style>
