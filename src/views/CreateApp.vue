<template>
<div class="container mt-3">
  <h1>Create Record</h1>
  <div class="row">
    <div class="col-md-6">
      <form action="">
        <div class="mb-2">
          <input v-model="records.imageurl" type="text" placeholder="Image Url" required>
        </div>
        <div class="mb-2">
          <input v-model="records.name" type="text" placeholder="Enter your name" required>
        </div>
        <div class="mb-2">
          <input v-model="records.email" type="email" placeholder="Enter your email" required>
        </div>
        <div class="mb-2">
          <input v-model="records.jobDescription" type="text" placeholder="Job Description" required>
        </div>
        <div class="mb-2">
          <input v-model="records.mobile" type="text" placeholder="Mobile" required>
        </div>
        <div class="mb-2">
          <input v-model="records.companyName" type="text" placeholder="Company Name" required>
        </div>
        <div class="mb-2">
          <input v-model="records.salary" type="number" placeholder="Salary" required>
        </div>
        <div class="mb-2">
          <select v-model="records.department" required>
            <option value="">Select Department</option>
            <option v-for="department of departments" :key="department.id" :value="department.departmentName">
            {{department.departmentName}}
            </option>
          </select>
        </div>
        <div class="mb-2">
            <input v-on:click="createRecord" type="submit" class="btn btn-success" value="Create New Record">
        </div>  
      </form>
    </div>
  </div>
</div>
<div class="col-sm-4">
          <img :src="records.imageurl" alt="Sample Image">
</div>
  <pre>
    {{records}}
    <!-- {{departments}} -->
 </pre>
</template>
<script>
  import axios from "axios";
    export default{
        name: 'CreateApp',
        data: function(){
          return{
              records:{
                  imageurl: '',
                  name: '',
                  email: '',
                  jobDescription: '',
                  mobile: '',
                  companyName: '',
                  salary: '',
                  department: ''
              },
              departments:[]
          } 
        },
        async created(){
          try {
            const res = await axios.get(`http://localhost:9000/department`);
            this.departments = res.data;
          } catch (error) {
            console.log(error);
          }
        },
        methods: {
          async createRecord(){
            try {
              const res = await axios.post(`http://localhost:9000/records`, this.records);
              if (res) {
                return this.$router.push('/');
              }
            } catch (error) {
              console.log(error);
            }
          }
        }
    }
</script>
<style scoped>
img{
  width: 100%;
  height: auto;
}
</style>