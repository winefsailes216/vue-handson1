<template>
  <h1>Gallery</h1>
  <!-- <img src="../assets/logo.png" alt="logo">
  <img alt="Vue logo" src="../assets/img/logo.png"> -->
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" style="height: 200px;" src="../assets/img/logo.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</template>

<script>
    export default{
        name: 'GalleryApp'
    }
</script>

<style scoped>
h1{
  text-align: center;
}
</style>