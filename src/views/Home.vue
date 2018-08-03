<template>
  <div class="home">
    
    <ListOfAvengers/>
    <Main/>

  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue';
import ListOfAvengers from '../components/avengers_list/ListOfAvengers.vue';

export default {
  name: 'home',
  components: {
    Main,
    ListOfAvengers,
  },
};
</script>
