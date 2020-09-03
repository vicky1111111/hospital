<template>
  <div id="app">
   <el-container >
    <el-header style="height:90px;">
                <img src="@/assets/logo2.png" style="width:30%;height:95%;float:left;padding-left:40px">
                                
                <el-row style="float:right;padding:25px">
                 <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">个人中心</el-menu-item>
                    
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                  </el-menu>
                </el-row>
    </el-header>

    <el-container style="height:500px;border-top: 7px solid #0033CC">

        <el-aside >
                   
<el-menu
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#344058"
              text-color="#D0D0D0"
              active-text-color="#fff"
              router>
              <div v-for="item,index in mymenu" :key=index>
                <!--存在子菜单-->
                <el-submenu v-if="item.children" :index='item.name'>
                  <template slot="title">
                    <span>{{item.name}}</span>
                  </template>
                  <el-menu-item v-for="subitem,subindex in item.children" :key=subindex :index='subitem.uri'>
                    {{subitem.name}}
							</el-menu-item>
    
                </el-submenu>
                <!--不存在子菜单-->
                <el-menu-item v-else :index='item.uri'>
                  <!--<i class="el-icon-menu"></i>-->
                  <span slot="title">{{item.name}}</span>
                </el-menu-item>
              </div>
            </el-menu>
        </el-aside>

        <el-main style=" box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" >
                <router-view></router-view>
                
        </el-main>

    </el-container>
    </el-container>



   <el-footer style="height:5%;">
       
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
mymenu:[
            {
              "name": "BMT",
              "children": [{
                "name": "管理",
                "uri": "/controller/bmtManage"
              }, {
                "name": "注册",
                "uri": "/controller/bmtRegister"
              },{
                "name": "上传模板",
                "uri": "/controller/bmtTem"
              },
              
              ],
            },
            {
              "name": "zahng",
              "children": [{
                "name": "管理",
                "uri": "/controller/bmtManage"
              }, {
                "name": "注册",
                "uri": "/controller/bmtRegister"
              },{
                "name": "上传模板",
                "uri": "/controller/bmtTem"
              },
              
              ],
            },
            {
              "name": "用户管理",
              "uri": "/controller/userManage"
            },
          ]
    }
  },


   methods: {

     getname(){
       this.message = localStorage.getItem('name')
     },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      }
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
 .el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
  }
  
  .el-aside {
    background-color:#ffffff;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {

  }
</style>

