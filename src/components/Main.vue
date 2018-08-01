<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h4>{{ text }}</h4>
  
   
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      title: null,
      text: null,
    }
  },
  beforeMount() {
    let url = 'https://api.cosmicjs.com/v1/978eab70-9016-11e8-a778-ef6b47017e84/object/home?hide_metafields=true';
    axios.get(url)
    .then(resp => {
      let data = resp.data.object.metadata;
      this.title = data.home_title;
      this.text = data.home_text;
    })
    .catch(e => {
      console.log(e);

    })
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
