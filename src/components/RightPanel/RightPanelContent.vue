<template>
	<form class="search">
		<label for="search" class="search__label text--white bg--black">
			<h3 class="search__label--text">E.g.: Charizard</h3>
			<input id="search" type="text" class="search__input">
		</label>

		<button class="search__button bg--gray text--yellow" @click.prevent>Search</button>
	</form>
</template>

<script>
	export default {
		name: 'RightPanelContent',
	};
</script>

<style lang="scss" scoped>
	.search {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		transform: rotateX(-180deg);

		@media (min-width: $viewport-medium) {
			transform: rotateY(-180deg);
			padding-top: 50px;
		}

		&__label {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			height: 50%;
			padding: 6px 12px 12px;

			@media (min-width: $viewport-medium) {
				height: 36%;
				padding: 12px 24px 24px;
			}
		}

		&__input {
			color: inherit;
			background: transparent;
			border: none;
			border-bottom: 2px solid color(white);
			padding: 4px 8px;

			@media (min-width: $viewport-medium) {
				padding: 8px;
			}
		}

		&__button {
			align-self: flex-end;
			width: 120px;
			height: 50px;
			border: 4px solid color(black);
			border-radius: 8px;
			font-size: 18px;
			font-weight: bold;
			cursor: pointer;

			@media (min-width: $viewport-medium) {
				width: 160px;
				height: 60px;
			}
		}
	}
</style>
