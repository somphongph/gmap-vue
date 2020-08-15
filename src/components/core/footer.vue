<template>
	<v-footer class="justify-center" color="grey lighten-2" height="75" inset>
		<div class="text-center">
			Copyright &copy;{{ date }}&nbsp;<strong>Tripgator.com</strong>
		</div>
	</v-footer>
</template>

<script>
export default {
	name: 'CoreFooter',

	data: () => ({
		date: new Date().getFullYear()
	})
};
</script>
