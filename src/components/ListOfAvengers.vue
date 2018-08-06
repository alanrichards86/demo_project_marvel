<template>
  <div class="hello">
    <div class="holder">
      <h1>Hello</h1>
      <form @submit.prevent="addSkill">

        <input type="text" autocomplete="off" placeholder="Enter an Avenger you would like see in the movies..." v-model="skill" v-validate="'min:5'" name="skill">
                                                                  <!-- V-Validate  ^^^^^^^^^^ form validation from plugin vee-validate -->
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                                                    <!-- FlipInX ^^^^^^^    link to these animation found in index.html -->
                                                    <!-- https://daneden.github.io/animate.css/ -->
          <!-- <p class="alert" v-if="errors.has('skill')" >{{errors.first('skill')}}</p> -->
        </transition>

      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li class="listSkills" v-for="(data, index) in skills" :key="index"> {{ data.skill }} 
            <i class="fa fa-minus-circle" @click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>

    <br>
    <br>
    <br>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ListOfAvengers',
  data() {
    return {
      skills: [],
      skill: ''
    }
  },
  methods: {
    addSkill() {
      //Form Validation via Vee-Validate --- https://github.com/baianat/vee-validate
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({skill: this.skill})
          this.skill = '';
        }else {
          console.log('Not Valid')
        }
      })
    },
    remove(id) {
      this.skills.splice(id, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

  .listSkills {
    list-style: none;
  }
  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  i {
    float: right;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert{
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

.alert-in-enter-active {
  animation: bounce-in .5s;
}

.alert-in-leave-active {
  animation: bounce-in .5s reverse
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

</style>
