<!-- 登陆页面 -->
<template>
<div id="app">
	<Login></Login>
  <router-view></router-view>
</div>
  
</template>


<script>
import Login from '@/main/Login.vue'
import Api from '@/apis/yonghu9.js'
export default {
  props: ['productData'],
  components: {Login,},
  data () {
    return {
		     VO: { 
		ygbh: '',
		ygmm: '',
       },
       messages:'',
    }
  }, 
methods: {
},

}
</script>

<style>
  
  #app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

