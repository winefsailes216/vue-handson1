<template>
    <!-- Will view what ever you call in router -->
    <NavBar/>
    <router-view/> 
    <FooTer/>
</template>

<script>
  import NavBar from '@/components/Navbar.vue';
  import FooTer from '@/components/Footer.vue';
  export default{
    name: 'App',
    components: {NavBar, FooTer}
  }
</script>