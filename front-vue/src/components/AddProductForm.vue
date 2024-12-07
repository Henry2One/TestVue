<template>
    <div>
      <h2>Agregar Producto</h2>
      <form @submit.prevent="addProduct">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="product.name" required />
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="product.price" required />
        </div>
        <div>
          <label for="category">Category:</label>
          <input type="text" id="category" v-model="product.category" required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        product: {
          name: '',
          price: 0,
          category: '',
        },
      };
    },
    methods: {
      async addProduct() {
        try {
          await axios.post('http://localhost:3001/api/products', this.product);
          alert('Product added successfully');
          this.product.name = '';
          this.product.price = 0;
          this.product.category = '';
          this.$emit('product-added');
        } catch (error) {
          console.error('Error loading product:', error);
        }
      },
    },
  };
</script>

<style>

h2{
  text-align: center;
}

form{
  margin-top: 5vh;
  width: 40%;
  margin-left: 40vw;
}

form div{
  margin-top: 10px;
  margin-bottom: 10px;
}

form button{
  margin-top: 10px;
  width: 45%;
  font-size: 1.3rem;
}

form div input{
  margin-left: 10px;
}

</style>
  