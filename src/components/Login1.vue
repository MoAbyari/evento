<template>
	<div>
		<v-text-field message="hi" type="text" v-model="name">
		</v-text-field>
		<v-text-field type="text" v-model="surname"></v-text-field>
		<v-btn color="light" @click="addToFireBase"> create users</v-btn>
		<v-btn color="light" @click="showUsers"> get users</v-btn>
	</div>
</template>

<script>
import usersColRef  from '../firebase.js'
import { addDoc, getDoc } from 'firebase/firestore'
export default {
		name: 'log-in',
		data() {
			return {
				name: '',
				surname: ''
			}
	},
		methods: {
			async addToFireBase() {
				console.log('started');
				const addedDoc = await addDoc(usersColRef, this.$data)
				console.log(addedDoc)
			},
			async showUsers() {
				console.log('started');
				const fetchedDoc = await getDoc('jAhre93hbH3ibX3Eba4s').then(
					console.log('yay')

				)
				console.log(fetchedDoc)
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>