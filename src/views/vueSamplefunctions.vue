<template>
  <h1>Records</h1>
  <h2>NAME: {{name}}</h2>

  <!-- On Event attributes -->
    <button v-on:click="upgradeSalaryLevel" class="btn btn-success btn-hover m-2">Promote</button>
    <button v-on:click="degradeSalaryLevel" class="btn btn-danger btn-hover m-2">Demote</button>
    <br>
  <!-- Attribute binding -->
<img v-bind:src="image" alt="tim image">

<h2>Employee Code: {{employeeCode}}</h2>
<!-- Conditional Rendering -->
<h2 v-if="status && employeeCode >= 10">✅</h2>
<h2 v-if="!status || employeeCode < 10">❎</h2>


<!--IF ELSE Control arguments -->
<h2 v-if="employeeCode < 10">Terminated</h2>
<h2 v-else-if="employeeCode >= 10 && employeeCode <= 20">Salary Grade 10</h2>
<h2 v-else> Salary Grade 20</h2>

  <!--FOR Loop Rendering -->
  <p>Projects:</p>
  <ul>
    <li v-for="(item, index) in projects" :key="index">
      {{item}}
    </li>
  </ul>
  <p>Colors: </p>
  <ul>
    <!-- Class binding with Style.css -->
    <li v-for="(color, index) in colors" :key="index" class="color" :style="{backgroundColor: color}">
      <!-- {{color}} -->
    </li>
  </ul>
  <p>Details:</p>
  <table class="table table-dark table-striped table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Job Description</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="detail in details" :key="detail.id">
        <td>{{detail.id}}</td>
        <td>{{detail.jobDescription}}</td>
      </tr>
    </tbody>
  </table>
  

</template>

<script>
export default{
  name: 'vueSamplefunction',
  data(){
    return{
      name: "Tim Berners Lee",
      image: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQoE37mVFZrR7FllTvqX7lsUw-nklDMacaTx-_Xj5bmnIvCXu3Ea12qASTrWc5dVBXq',
      projects: ['Hyperlink', 'HTML', 'Web Browser'],
      colors: ['Red', 'Green', 'Blue'],
      employeeCode: 11,
      status: true,
      details: [
        {id: 123, jobDescription:"CEO"},
        {id: 133, jobDescription:"Sr Dev"},
        {id: 143, jobDescription:"Sr Architect"}
      ]
    }
  },
  methods:{
    upgradeSalaryLevel(){
      this.employeeCode += 5;
    },
    degradeSalaryLevel(){
      this.employeeCode -= 5;
    }
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
img{
  width: 300px;
  height: 350px;
}
</style>