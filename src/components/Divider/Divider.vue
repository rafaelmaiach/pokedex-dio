<template functional>
	<div class="divider bg--red-01">
		<div class="arc arc--top bg--red-04" />
		<div class="arc arc--bottom bg--red-04" />
	</div>
</template>

<style lang="scss" scoped>
	.divider {
		position: absolute;
		height: calc(100% - 40px);
		width: 40px;
		left: calc(50% - 20px);
		top: 40px;
		box-shadow: inset 10px 0 0 0 color('red-00'), inset -10px 0 0 0 color('red-03');

		.arc {
			position: absolute;
			height: 4px;
			width: 100%;

			&--top {
				top: 20px;
			}

			&--bottom {
				bottom: 20px;
			}

			@media (max-width: 767px) {
				height: 100%;
				width: 4px;

				&--top,
				&--bottom {
					top: 0;
				}

				&--top {
					left: 20px;
				}

				&--bottom {
					right: 20px;
				}
			}
		}

		@media (max-width: 767px) {
			width: 100%;
			top: 50%;
			height: 40px;
			left: 0;
			box-shadow: inset 0 10px 0 0 color('red-00'), inset 0 -10px 0 0 color('red-03');
		}
	}
</style>
