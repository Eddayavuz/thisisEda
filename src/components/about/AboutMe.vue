<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
					`Hello, I'm Eda. A teacher who's trying to make a career shift. I'm a computer science teacher. So I'm not a stranger to the community.`,
				},
				{
					id: 2,
					bio:
					`Teaching is fun. But so is learning. I describe myself as a life-long, self-organized learner. I'm a firm believer that anyone can learn anything that they've set their mind to. With this motto, I decided to learn more about front-end development and enrich my palette with the new technology stacks. That's how I found out about Front-end Foxes and had the privilege to become a fellow fox!`,
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/eda.jpeg"
				class="rounded-xl w-96"
				alt="A Photography of Eda Yavuz."
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
