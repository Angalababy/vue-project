<template>
  <div>
    <Email v-if="num===2" :changeNum="changeNum"/>
    <Login v-if="num===0" :changeNum="changeNum"/>
    <Phone v-if="num===1" :changeNum="changeNum"/>
  </div>
</template>

<script>
  import Email from './email.vue'
  import Login from './login.vue'
  import Phone from './phone.vue'
  export default {
    data(){
      return{
        num:0 //0:login 1：phone  2:email
      }
    },
    methods:{
      changeNum(num){
        this.num=num
      }
    },
    components:{
      Email,
      Login,
      Phone
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
