export default {

	isAuthenticated() {
		if(!appsmith.store.user) {
			navigateTo('Authentication');
		}
	},
	signOut: async () => {

		removeValue('user')
			.then(() => navigateTo('Authentication'))

	}
}