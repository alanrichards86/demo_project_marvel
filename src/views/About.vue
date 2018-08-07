<template>
  <div class="about">
    <h1>{{ avenger_name }}</h1>
    <img v-bind:src="logo" alt="" />
    <br />
    <hr />
    <br />
    <p>
      {{ wiki }}
    </p>
  </div>
</template>

<script>
import axios from 'axios';



export default {
  name: 'About',
  data: function() {
    return {
      avenger_name: null,
      wiki: null,
      logo: null
    }
  },
  watch: {
    '$route.params.name': function() {
      this.getAvenger(this.$route.params.name);
    }
  },
  methods: {
    getAvenger(avenger) {
      // let avenger = this.$route.params.name;
      console.log(avenger);
    let url = 'https://api.cosmicjs.com/v1/978eab70-9016-11e8-a778-ef6b47017e84/object/' + avenger + '?hide_metafields=true'
    axios.get(url)
    .then(resp => {
      let data = resp.data.object.metadata;
      console.log(data);
      this.avenger_name = data.name;
      this.wiki = data.wiki
      this.logo = data.logo.url
      // this.assignHeroData(data);
    })
    .catch(e => {
      console.log(e);
    })
    }
  },
  // assignHeroData(heroData) {
  //   this.avenger_name = heroData.name;
  //   this.wiki = heroData.wiki
  //   this.logo = heroData.logo.url
  // },
  created() {
    // console.log($route);
    this.getAvenger();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
