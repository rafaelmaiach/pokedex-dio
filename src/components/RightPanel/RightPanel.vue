<template>
	<div class="panel" :class="{ open: isOpen }">
		<div class="panel--front bg--red-01">
			<RightPanelContent />
		</div>
		<div class="panel--back bg--red-01" @click="isOpen = true">
			<div class="back--triangle" />
		</div>
	</div>
</template>

<script>
	import RightPanelContent from './RightPanelContent.vue';

	export default {
		name: 'RightPanel',
		components: {
			RightPanelContent,
		},
		data() {
			return {
				isOpen: false,
			};
		},
	};
</script>

<style lang="scss" scoped>
	$triangle-size: 30px;
	$triangle-color: color(yellow);

	.panel {
		display: flex;
		width: 100%;
		background-color: transparent;
		top: 40px;
		z-index: 1;

		@media (min-width: $viewport-medium) {
			width: calc(50% - 20px);
			top: 0;
		}

		&--front,
		&--back {
			position: absolute;
			display: flex;
			top: 0;
			width: 100%;
			height: 100%;
			padding: 85px 20px 20px;
			clip-path: polygon(270px 41px, 100% 41px, 100% 100%, 0 100%, 0 75px, 200px 75px);
			transition: all 1.5s ease-in-out;
			transform: translateY(calc(-100% - 40px)) rotateX(0deg);
			transform-origin: left bottom;

			@media (min-width: $viewport-medium) {
				transform: translateX(calc(-100% - 40px)) rotateY(0deg);
				transform-origin: right top;
			}
		}

		&.open {
			.panel--front,
			.panel--back {
				transform: rotateX(-180deg) translateY(100%);

				@media (min-width: $viewport-medium) {
					transform: translateX(-100%) rotateY(180deg);
				}
			}
		}

		&--back {
			display: flex;
			justify-content: center;
			backface-visibility: hidden;
			cursor: pointer;

			@media (min-width: $viewport-medium) {
				align-items: center;
				justify-content: flex-start;
			}

			.back--triangle {
				border-top: $triangle-size solid $triangle-color;
				border-right: $triangle-size solid transparent;
				border-left: $triangle-size solid transparent;
				width: 0;
				height: 0;

				@media (min-width: $viewport-medium) {
					border-top: $triangle-size solid transparent;
					border-left: $triangle-size solid $triangle-color;
					border-bottom: $triangle-size solid transparent;
				}
			}
		}
	}
</style>
