<template>

	<div>
		<div class="imgblock" title="Показать детальную информацию" @click="showDetails('mexico')">
			<!-- двойные кавычки в html -->
			<img src='@/assets/mexico1.jpg'>
			<span>Мехико</span>
		</div>
		<div class="details" id="mexico" v-if="city === 'mexico'">
			<img src='@/assets/mexico1.jpg'><br/>
		Мехико – живописная столица и самый густонаселённый город Мексики, но на этом список его достижений не
					заканчивается. Протяжённостью столица уступает только Токио и Нью-Йорку, а в пределах Латинской Америки и
					вовсе занимает лидирующую позицию. Мехико – центр социальной, экономической, научной и политической сфер.
					Мода, развлечения, туризм, искусство и культура – всё это делает город главной ареной страны, где ежегодно
					разворачиваются политические митинги, красочные фестивали и многолюдные празднества.
		</div>
	</div>

</template>


<script>
import CityBlock from './components/CityBlock.vue'

export default {
  name: 'CityBlock',
  data: function () {
    return {
    }
  },
  methods: {
    showDetails: function (city) {
      console.log('city:', city)
      this.city = city

      // console.log('details div:', document.querySelector('#' + city), '#' + city)

      // setTimeout(() => {
      //   console.log('details div:', document.querySelector('#' + city), '#' + city).scrollIntoView()
      // }, 500)
    },
  },
	mounted: function() {
		console.log('city:', this)
	},
}
</script>
