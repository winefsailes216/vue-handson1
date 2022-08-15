<template>
  
  <div class="container mt-3">
  <h1>Edit Records</h1>

  <div class="row">
    <div class="col-md-6">
      <form action="">
        <div class="mb-2">
          <input type="text" placeholder="Enter your name">
        </div>
        <div class="mb-2">
          <input type="email" placeholder="Enter your email">
        </div>
        <div class="mb-2">
          <input type="text" placeholder="Job Description">
        </div>
        <div class="mb-2">
          <input type="text" placeholder="Mobile">
        </div>
        <div class="mb-2">
          <input type="text" placeholder="Company Name">
        </div>
        <div class="mb-2">
          <input type="number" placeholder="Salary">
        </div>
        <div class="mb-2">
          <select name="" id="">
            <option value="">Select Department</option>
            <option value="Executive">Executive</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div class="mb-2">
            <button type="submit" class="btn btn-success">Update Record</button>
        </div>
        <div class="col-sm-4">
          <img
            src="https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp&width=1440&height=864"
            alt="hero avatar"
          />
        </div>
      </form>
    </div>
  </div>
</div>
  
</template>

<script>
export default{
  name: 'EditRecord'
}
</script>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
</style>