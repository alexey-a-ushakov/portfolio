<template>
  <header>
    <nav class="menu">
      <ul>
        <li><a href="#" @click="navigate('home')">Главная</a></li>
        <li><a href="#city" @click="navigate('city')">Города</a></li>
        <li><a href="#culture" @click="navigate('culture')">Культура</a></li>
        <li><a href="#photo" @click="navigate('photo')">Достопримечательности</a></li>
        <input type="text" placeholder="Поиск">
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    msg: String
  },
  methods: {
    navigate: function (link) {
      console.log(link)
      console.log('this.$root:', this.$root.page)

      this.$root.page = link
      console.log('this.$root:', this.$root.page)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: absolute;
  width: 100%;
  height: 40px;
}

nav {
  height: 100%;
}

nav ul {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  height: 100%;
}

ul li {
  height: 100%;
  display: flex;
}

input{
  border-radius: 12px;
  margin-top: 10px;
}

a {
  margin: auto;
  color: rgb(214, 192, 126);
  font-family: Comic Sans MS, Comic Sans, cursive;
  text-decoration: none;
}

li {
  list-style-type: none;

}
</style>
