<template>
  <div>
    <h2>Lista de Productos</h2>
    <table align="center" style="text-align: center;">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3001/api/products');
        this.products = response.data.data; 
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style>

table{
  width: 80%;
}

thead tr th{
  background-color: #07064E;
  border-radius: 10px;
  font-size: 1.2rem;
}


</style>