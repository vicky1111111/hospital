<template>
  <div id="app">
   <el-container >
    <el-header style="height:90px;">
                <img src="@/assets/logo2.png" style="width:20%;height:95%;float:left;padding-left:40px">
                                
                <el-row style="float:right;padding:25px">
                   <router-link to='/grxinxi'>个人中心<i class="el-icon-view el-icon--right"></i> </router-link>
                   <router-link to='/gonggaolan'>公告信息<i class="el-icon-view el-icon--right"></i> </router-link>

            
                </el-row>
    </el-header>

    <el-container style="height:500px;border-top: 10px solid #0033CC">

        <el-aside style="width:250px;box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1)">
                   
<el-menu
              :default-active="activeIndex"
              :unique-opened="opened"
              class="el-menu-vertical-demo"
              router>
              <div v-for="item,index in mymenu" :key=index>
                <!--存在子菜单-->
                <el-submenu v-if="item.children" :index='item.name' color='#FFFFFF'
                 style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); background: linear-gradient(to right,#0033CB,#FFFFFF);">
                  <template slot="title">
                     <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                  </template>
                  <el-menu-item v-for="subitem,subindex in item.children" :key=subindex :index='subitem.uri'
                 >
                     <i :class="subitem.icon"></i>
                     <span>{{subitem.name}}</span>
							</el-menu-item>
    
                </el-submenu>
                <!--不存在子菜单-->
                <el-menu-item v-else :index='item.uri'>
                  <!--<i class="el-icon-menu"></i>-->
                   <i :class="item.icon"></i>
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



   <el-footer style="height:2.5%; background: linear-gradient(to top,#0033CC,#0033CC);">
       
  </el-footer>

  </div>
</template>

   
<script>

import Api from '@/apis/yonghu9.js'
import grxinxi from '@/main/yonghu/grxinxi.vue';
  export default {
    name: 'app',
    components: { grxinxi,},
  mounted () {
            this.selectById();
        },

  data() {
    return {
        opened:true,
      activeIndex:"/menu0",
mymenu:[
            {
              "name": "挂号管理",
              "children": [{
                "name": "新建就诊卡",
                "icon":"el-icon-message",
                "uri": "/addbrb"
              }, {
                "name": "挂号服务",
                
                "icon":"el-icon-message",
                "uri": "/guahao"
              },{
                "name": "病人信息处理",
                
                "icon":"el-icon-message",
                "uri": "/brb"
              },{
                "name": "挂号信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ghb"
              },
              
              ],
            },
             {
              "name": "检查管理",
              "children": [{
                "name": "添加检查",
                "icon":"el-icon-message",
                "uri": "/addjcxmb"
              }, {
                "name": "检查信息处理",
                
                "icon":"el-icon-message",
                "uri": "/jcxmb"
              },{
                "name": "检查项目收费",
                
                "icon":"el-icon-message",
                "uri": "/jcshoufei"
              },
              
              ],
            },

             {
              "name": "划价管理",
              "children": [{
                "name": "划价收费",
                "icon":"el-icon-message",
                "uri": "/huajia"
              }, {
                "name": "收入信息处理",
                
                "icon":"el-icon-message",
                "uri": "/hjb"
              },
              
              ],
            },
          {
              "name": "科室管理",
              "children": [{
                "name": "添加科室",
                "icon":"el-icon-message",
                "uri": "/addksb"
              }, {
                "name": "科室信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ksb"
              },
              
              ],
            },
            {
              "name": "药品管理",
              "children": [{
                "name": "添加药品",
                "icon":"el-icon-message",
                "uri": "/addypb"
              }, {
                "name": "药品信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ypb"
              },
              ],
            },
{
              "name": "病历管理",
              "children": [{
                "name": "病历信息录入",
                "icon":"el-icon-message",
                "uri": "/addblb"
              }, {
                "name": "病历信息管理",
                
                "icon":"el-icon-message",
                "uri": "/blb"
              },
              
              ],
            },

            {
              "name": "处方管理",
              "children": [{
                "name": "开处方",
                "icon":"el-icon-message",
                "uri": "/addcfb"
              }, {
                "name": "处方信息处理",
                
                "icon":"el-icon-message",
                "uri": "/cfb"
              },
              ],
            },
          {
              "name": "系统管理",
              "children": [{
                "name": "角色权限管理",
                "icon":"el-icon-message",
                "uri": "/qxdj"
              }, {
                "name": "公告信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ggb"
              },
              ],
            },

             {
              "name": "用户管理",
              "children": [
                {
                "name": "添加用户",
                "icon":"el-icon-message",
                "uri": "/addygb"
              },{
                "name": "用户信息处理",
                "icon":"el-icon-message",
                "uri": "/ygb"
              }, {
                "name": "发布公告",
                
                "icon":"el-icon-message",
                "uri": "/addggb"
              },
               {
                "name": "个人公告信息处理",
                
                "icon":"el-icon-message",
                "uri": "/grggb"
              },
              ],
            },


          ],
mymenu1:[
            {
              "name": "挂号管理",
              "children": [{
                "name": "新建就诊卡",
                "icon":"el-icon-message",
                "uri": "/addbrb"
              }, {
                "name": "挂号服务",
                
                "icon":"el-icon-message",
                "uri": "/guahao"
              },{
                "name": "病人信息处理",
                
                "icon":"el-icon-message",
                "uri": "/brb"
              },{
                "name": "挂号信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ghb"
              },
              
              ],
            },
             {
              "name": "检查管理",
              "children": [{
                "name": "添加检查",
                "icon":"el-icon-message",
                "uri": "/addjcxmb"
              }, {
                "name": "检查信息处理",
                
                "icon":"el-icon-message",
                "uri": "/jcxmb"
              },{
                "name": "检查项目收费",
                
                "icon":"el-icon-message",
                "uri": "/jcshoufei"
              },
              
              ],
            },

             {
              "name": "划价管理",
              "children": [{
                "name": "划价收费",
                "icon":"el-icon-message",
                "uri": "/huajia"
              }, {
                "name": "收入信息处理",
                
                "icon":"el-icon-message",
                "uri": "/hjb"
              },
              
              ],
            },
          {
              "name": "科室管理",
              "children": [{
                "name": "添加科室",
                "icon":"el-icon-message",
                "uri": "/addksb"
              }, {
                "name": "科室信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ksb"
              },
              
              ],
            },
            {
              "name": "药品管理",
              "children": [{
                "name": "添加药品",
                "icon":"el-icon-message",
                "uri": "/addypb"
              }, {
                "name": "药品信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ypb"
              },
              ],
            },
{
              "name": "病历管理",
              "children": [{
                "name": "病历信息录入",
                "icon":"el-icon-message",
                "uri": "/addblb"
              }, {
                "name": "病历信息管理",
                
                "icon":"el-icon-message",
                "uri": "/blb"
              },
              
              ],
            },

            {
              "name": "处方管理",
              "children": [{
                "name": "开处方",
                "icon":"el-icon-message",
                "uri": "/addcfb"
              }, {
                "name": "处方信息处理",
                
                "icon":"el-icon-message",
                "uri": "/cfb"
              },
              ],
            },
         
             {
              "name": "用户管理",
              "children": [
                {
                "name": "添加用户",
                "icon":"el-icon-message",
                "uri": "/addygb"
              },{
                "name": "用户信息处理",
                "icon":"el-icon-message",
                "uri": "/ygb"
              }, {
                "name": "发布公告",
                
                "icon":"el-icon-message",
                "uri": "/addggb"
              },
               {
                "name": "个人公告信息处理",
                
                "icon":"el-icon-message",
                "uri": "/grggb"
              },
              ],
            },
          ],
mymenu2:[
             {
              "name": "检查管理",
              "children": [{
                "name": "添加检查",
                "icon":"el-icon-message",
                "uri": "/addjcxmb"
              }, {
                "name": "检查信息处理",
                
                "icon":"el-icon-message",
                "uri": "/jcxmb"
              },{
                "name": "检查项目收费",
                
                "icon":"el-icon-message",
                "uri": "/jcshoufei"
              },
              
              ],
            },

             {
              "name": "划价管理",
              "children": [{
                "name": "划价收费",
                "icon":"el-icon-message",
                "uri": "/huajia"
              }, {
                "name": "收入信息处理",
                
                "icon":"el-icon-message",
                "uri": "/hjb"
              },
              
              ],
            },
         
            {
              "name": "药品管理",
              "children": [{
                "name": "添加药品",
                "icon":"el-icon-message",
                "uri": "/addypb"
              }, {
                "name": "药品信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ypb"
              },
              ],
            },
{
              "name": "病历管理",
              "children": [{
                "name": "病历信息录入",
                "icon":"el-icon-message",
                "uri": "/addblb"
              }, {
                "name": "病历信息管理",
                
                "icon":"el-icon-message",
                "uri": "/blb"
              },
              
              ],
            },

            {
              "name": "处方管理",
              "children": [{
                "name": "开处方",
                "icon":"el-icon-message",
                "uri": "/addcfb"
              }, {
                "name": "处方信息处理",
                
                "icon":"el-icon-message",
                "uri": "/cfb"
              },
              ],
            },
         

             {
              "name": "用户管理",
              "children": [
               {
                "name": "发布公告",
                
                "icon":"el-icon-message",
                "uri": "/addggb"
              },
               {
                "name": "个人公告信息处理",
                
                "icon":"el-icon-message",
                "uri": "/grggb"
              },
              ],
            },


          ],
mymenu3:[
            {
              "name": "挂号管理",
              "children": [{
                "name": "新建就诊卡",
                "icon":"el-icon-message",
                "uri": "/addbrb"
              }, {
                "name": "挂号服务",
                
                "icon":"el-icon-message",
                "uri": "/guahao"
              },{
                "name": "病人信息处理",
                
                "icon":"el-icon-message",
                "uri": "/brb"
              },{
                "name": "挂号信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ghb"
              },
              
              ],
            },
             {
              "name": "检查管理",
              "children": [{
                "name": "添加检查",
                "icon":"el-icon-message",
                "uri": "/addjcxmb"
              }, {
                "name": "检查信息处理",
                
                "icon":"el-icon-message",
                "uri": "/jcxmb"
              },{
                "name": "检查项目收费",
                
                "icon":"el-icon-message",
                "uri": "/jcshoufei"
              },
              
              ],
            },

             {
              "name": "划价管理",
              "children": [{
                "name": "划价收费",
                "icon":"el-icon-message",
                "uri": "/huajia"
              }, {
                "name": "收入信息处理",
                
                "icon":"el-icon-message",
                "uri": "/hjb"
              },
              
              ],
            },
          {
              "name": "科室管理",
              "children": [{
                "name": "添加科室",
                "icon":"el-icon-message",
                "uri": "/addksb"
              }, {
                "name": "科室信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ksb"
              },
              
              ],
            },
            {
              "name": "药品管理",
              "children": [{
                "name": "添加药品",
                "icon":"el-icon-message",
                "uri": "/addypb"
              }, {
                "name": "药品信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ypb"
              },
              ],
            },


             {
              "name": "用户管理",
              "children": [
               {
                "name": "发布公告",
                
                "icon":"el-icon-message",
                "uri": "/addggb"
              },
               {
                "name": "个人公告信息处理",
                
                "icon":"el-icon-message",
                "uri": "/grggb"
              },
              ],
            },
          ],
          mymenu4:[
            {
              "name": "挂号管理",
              "children": [{
                "name": "新建就诊卡",
                "icon":"el-icon-message",
                "uri": "/addbrb"
              }, {
                "name": "挂号服务",
                
                "icon":"el-icon-message",
                "uri": "/guahao"
              },{
                "name": "病人信息处理",
                
                "icon":"el-icon-message",
                "uri": "/brb2"
              },{
                "name": "挂号信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ghb2"
              },
              
              ],
            },
             {
              "name": "检查管理",
              "children": [{
                "name": "添加检查",
                "icon":"el-icon-message",
                "uri": "/addjcxmb"
              }, {
                "name": "检查信息处理",
                
                "icon":"el-icon-message",
                "uri": "/jcxmb2"
              },{
                "name": "检查项目收费",
                
                "icon":"el-icon-message",
                "uri": "/jcshoufei"
              },
              
              ],
            },

             {
              "name": "划价管理",
              "children": [{
                "name": "划价收费",
                "icon":"el-icon-message",
                "uri": "/huajia"
              }, {
                "name": "收入信息处理",
                
                "icon":"el-icon-message",
                "uri": "/hjb2"
              },
              
              ],
            },
          {
              "name": "科室管理",
              "children": [{
                "name": "添加科室",
                "icon":"el-icon-message",
                "uri": "/addksb"
              }, {
                "name": "科室信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ksb2"
              },
              
              ],
            },
            {
              "name": "药品管理",
              "children": [{
                "name": "添加药品",
                "icon":"el-icon-message",
                "uri": "/addypb"
              }, {
                "name": "药品信息处理",
                
                "icon":"el-icon-message",
                "uri": "/ypb2"
              },
              ],
            },


             {
              "name": "用户管理",
              "children": [
               {
                "name": "发布公告",
                
                "icon":"el-icon-message",
                "uri": "/addggb"
              },
               {
                "name": "个人公告信息处理",
                
                "icon":"el-icon-message",
                "uri": "/grggb"
              },
              ],
            },
          ],
    }
  },


   methods: {
		//返回编辑页功能		
						tologin() {
							this.$router.push({
                  path: `/Login`,
                  target:"_blank",
								})
            },
            	selectById(){
             let  ygbh=localStorage.getItem("ygbh")
                        Api.selectById(ygbh).then(res=>{
												this.qxdj=res.data.qxdj;
												if (this.qxdj=='0') {
													this.mymenu=this.mymenu;
												} else 	if (this.qxdj=='1'){
												this.mymenu=this.mymenu1;
												} else 	if (this.qxdj=='2'){
													this.mymenu=this.mymenu2;
												} else 	if (this.qxdj=='3'){
													this.mymenu=this.mymenu3;
												} else 	if (this.qxdj=='4'){
													this.mymenu=this.mymenu4;
												}
                            console.log(res);
                        }).catch(err => {
                            console.log(err)
                        });
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
  
 
</style>

