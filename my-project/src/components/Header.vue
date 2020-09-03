<template>

    <div id="header">
            
            <div id="logo1" style="martin:100px">
                <img src="@/assets/logo2.png" style="width:300px;height:60px;float:left;">
             </div>
    </div>
</template>


<script>

export default {
  name: 'Header',
  data(){
    return{
      title:"医院信息系统",
      fits:"医院信息系统",
        url: '@/assets/logo2.png'
    }
  },
  methods:{
    
  }
}
</script>

<style>
 #header {
  }
</style>
