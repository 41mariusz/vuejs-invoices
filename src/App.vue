<template>
<div>
  <input type="text" v-model="name1" placeholder="name"/>
  <input type="text" v-model="description1" placeholder="description"/>
  <input type="text" v-model="tax1" placeholder="tax"/>
  <input type="text" v-model="ammout1" placeholder="amountNet"/>
  <input type="text" v-model="date1" placeholder="date"/>
  <input type="button" @click="createPost()" value="post">
  <input type="button" @click="createPut()" value="put">

  <ul v-if="invoices && invoices.length">
    <li v-for="invoice of invoices" v-bind:key="invoice.id">
      <p>[{{invoice.id}}] <strong>{{invoice.name}}</strong></p>
      <p>{{invoice.description}}</p>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      name1: 'test1',
      description1: 'test test',
      tax1: 9,
      ammout1: 12.22,
      date1: '2019-12-12',
      invoices: []
    }
  },
  created() {
    this.$http.get('invoices').then((response) => {
      this.invoices = response.data
    })
    .catch((e) => {
      console.error(e)
    })
  },
  methods: {
    createPost () {
      this.$http.post('invoices', {
        name: this.name1,
        description: this.description1,
        tax: this.tax1,
        ammoutNet: this.ammout1,
        date: this.date1
      }).then((response) => {})
      .catch((e) => {
        console.error(e)
      })
    },
    createPut () {
      this.$http.post('invoices', {
        id: 1,
        name: this.name1,
        description: this.description1,
        tax: this.tax1,
        ammoutNet: this.ammout1,
        date: this.date1
      }).then((response) => {})
      .catch((e) => {
        console.error(e)
      })
    }
  }
}
</script>
