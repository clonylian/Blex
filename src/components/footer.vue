<template>
  <div class="ynewfoot">
    <div class="ynfootbox flex jus">
      <div class="ynfootbl flex">
        <span>@2023 NAVl. All rights reserved.</span>
        <div class="ynfootblrou flex">
          <router-link to="/terms" target="_blank"
            >Terms of Service</router-link
          >
          <router-link to="/eigenlayer" target="_blank"
            >Privacy Policy</router-link
          >
        </div>
      </div>

      <p class="ynfootend flex">Audited by <a href="">otterSec, Movebit</a></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ynewfoot {
  width: 100%;
  background: rgb(30, 37, 43);
  padding-top: 3.75rem;
  position: relative;
}
.ymainhy .ynewfoot {
  background: white;
}
.ynfootbox {
  width: 63.5%;
  align-items: center;
  margin: 0 auto;
  border-top: 1px solid rgb(179 187 202);
  padding: 1rem 0;
}
.ynfootbl {
  column-gap: 1rem;
  align-items: center;
}
.ynfootbl > span {
  font-family: "Inter";
  font-size: 1rem;
  line-height: 1.5rem;
  color: #6a7986;
}
.ynfootblrou {
  column-gap: 1rem;
}
.ynfootblrou > a {
  font-family: "Inter";
  font-size: 1rem;
  line-height: 1.5rem;
  color: #6a7986;
  transition: all 0.4s;
}
.ynfootblrou > a:hover {
  color: white;
}
.ymainhy .ynfootblrou > a:hover {
  color: #000;
}
.ynfootend {
  font-family: "Inter";
  font-size: 1rem;
  line-height: 1.5rem;
  color: #6a7986;
  align-items: center;

  column-gap: 0.5rem;
}
.ymainhy .ynfootbox > span {
  color: black;
}

.ymainhy .ynfootend > a {
  color: black;
}

.ynfootend > a {
  font-family: "Poppins";
  color: white;
}
@media (max-width: 1250px) {
  .ynfootbox {
    width: 95%;
    display: block;
    text-align: center;
  }
  .ynfootbl {
    justify-content: center;
    flex-direction: column;
  }
  .ynewfoot {
    padding-top: 2rem;
  }
  .ynfootend {
    width: 100%;
    justify-content: center;
  }
}
</style>
