<template>
  <div class="container">
    <h1>Records</h1>

    <router-link to="/create" class="btn btn-success mb-3"
      ><i class="fa fa-plus-circle"> Create Record</i></router-link
    >
    <form action="">
      <div class="row mb-5">
        <div class="col-md-6">
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name to Search"
              />
            </div>
            <div class="col">
              <input
                type="submit"
                value="Search"
                class="btn btn-outline-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div class="container" v-if="records.length > 0">
    <div class="row">
      <div class="col-md-6"  v-for="record in records" :key="record">
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
                
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column align-items-center justify-content-center">
                <router-link :to="`/records/${record.id}`" class="btn btn-warning mb-1">
                  <i class="my-1 fa fa-eye"></i>
                </router-link>
                <router-link to="/edit/:EditRecordsID" class="btn btn-secondary mb-1">
                  <i class="my-1 fa fa-pen"></i>
                </router-link>
                <button class="btn btn-danger mb-1">
                  <i class="my-1 fa fa-trash"></i>
                </button>
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
export default {
  name: "RecordsApp",
  data(){
    return{
      records:[],
      errorMessage: null
    }
  },
  async created(){
    try {
      const res = await axios.get(`http://localhost:9000/records`);
      this.records = res.data;
    } catch (error) {
      this.errorMessage = error;
    }
  }
};
</script>

<style scoped>
img{
  width: 100%;
  height: auto;
}
</style>
