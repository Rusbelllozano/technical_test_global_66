<script setup></script>
<template>
  <div class="home">
    <div class="content_logo">
      <img class="pikachu" src="../../assets/images/Pikachu.png" />
      <img class="circle" src="../../assets/images/Red.png" />
    </div>
    <div class="content_text">
      <h3 class="title_welcome lato-bold">Welcome to Pokédex</h3>
      <p class="text_welcome lato-semibold">
        The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
        Pokémon world.
      </p>
      <RouterLink to="/list-pokemon">Get started</RouterLink>
    </div>
  </div>
</template>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}
.content_logo {
  position: relative;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin-bottom: 60px;
}
.pikachu {
  position: absolute;
  bottom: -11px;
  z-index: 2;
  left: -3px;
}
.circle {
  width: 210px;
  height: 210px;
  position: absolute;
  bottom: 0;
}

.title_welcome {
  font-size: 26px;
  margin-bottom: 30px;
  color: #353535;
}

.text_welcome {
  font-size: 18px;
  color: #5e5e5e;
  line-height: 1.5;
}
.content_text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
}
.content_text a {
  margin-top: 50px;
  text-decoration: none;
  color: #fff;
  background-color: #f22539;
  border-radius: 30px;
  padding: 11px 20px;
  font-weight: 600;
  transition: 0.5s;
}
.content_text a:hover {
  background-color: #c00e20;
}
</style>
