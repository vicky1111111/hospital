<template>
  <div id="app">
   <el-container>
    <el-header>
        <Header></Header>
    </el-header>

    <el-container>

        <el-aside width="20%">
        
                  <el-menu
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    :default-active="activeIndex"
                    router
                  >
                    <NavMenu :navMenus="menuData"></NavMenu>
                  </el-menu>
                
        </el-aside>

        <el-main width="80%">
                <router-view></router-view>
                
        </el-main>

    </el-container>
   </el-container>



   <el-footer>
        <Footer></Footer>
  </el-footer>

  </div>
</template>

   
<script>
  import Footer from '@/components/Footer';
  import Header from '@/components/Header';
  import Main from '@/components/Main';
import NavMenu from "@/components/NavMenu.vue";

  export default {
    name: 'app',
    components:{
         Header,Footer,Main,NavMenu,
      },

       mounted () {
            
        },

  data() {
    return {
      activeIndex: '/Main',
      menuData: [
        {
          //一级
          entity: {
            id: 1,
            icon: "el-icon-message",
            alias: "两级菜单"
          },
          //二级
          childs: [
            {
              entity: {
                id: 3,
                icon: "el-icon-loading",
                alias: "权限管理",
                value: "/main1",
              }
            },
            {
              entity: {
                id: 4,
                icon: "el-icon-bell",
                alias: "角色管理",
                value: "/Main",
              }
            },
         
          ]
        },
       
      
      ]
    };
  },


   methods: {

     getname(){
       this.message = localStorage.getItem('name')
     },
      }
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: azure;
  }
  .el-header, .el-footer {
    background-color: #545c64;
    color: #fff;
    line-height: 25px;
  }
  
  .el-aside {
    background-color: #545c64;
    line-height: 20px;
    height:800px
  }
  .el-main {
    background-color: #fff;
    color: #333;
    height:800px;
    overflow: hidden;
  }
</style>

