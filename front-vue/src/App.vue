<template>
  <div id="app" class="home">
    <h1>Gestión de Productos</h1>
    <ProductsTable class="productsTable" ref="productsTable" />
    <AddProductForm class="addProduct" @product-added="refreshProducts" />
  </div>
</template>

<script>
import ProductsTable from './components/ProductsTable.vue';
import AddProductForm from './components/AddProductForm.vue';

export default {
  name: 'App',
  components: {
    ProductsTable,
    AddProductForm,
  },
  methods: {
    refreshProducts() {
      this.$refs.productsTable.fetchProducts();
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

body{
  background-color: #1c1c1c;
  color: rgb(229, 229, 229);
  font-family: "Montserrat", sans-serif;
  padding: 15px;
}

h1{
  text-align: center;
}

.productsTable{
  margin-top: 5vh;
}

.addProduct{
  margin-top: 15vh;
}
</style>


