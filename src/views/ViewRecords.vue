<template>
  <div class="container">
   {{recordId}}
   {{record.name}}
    <h1>View Records</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group-item shadow-lg">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <img
                  :src="record.imgurl"
                  alt="hero avatar"
                />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Name: <span class="fw-bold">{{record.name}}</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">{{record.email}}</span></li>
                  <li class="list-group-item">Job Description: <span class="fw-bold">{{record.jobDescription}}</span></li>
                  <li class="list-group-item">Mobile: <span class="fw-bold">{{record.mobile}}</span></li>
                  <li class="list-group-item">Company Name: <span class="fw-bold">{{record.companyName}}</span></li>
                  <li class="list-group-item">Salary: <span class="fw-bold">{{record.salary}}</span></li>
                  <li class="list-group-item">Department: <span class="fw-bold">{{record.department}}</span></li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
    export default{
        name: 'ViewRecords',
        data: function(){
          return {
            recordId:this.$route.params.recordId,
            record:[]
          }
        },
        async created(){
        try {
          const res = await axios.get(`http://localhost:9000/records/$(this.recordId)`);
          this.record = res.data;
        } catch (error) { 
          console.log(error);
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