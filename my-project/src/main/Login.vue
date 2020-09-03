<!-- 登陆页面 -->
<template>
<div id="app"  :style="backgroundDiv">
			<div style="margin-top:10%;margin-left:30%;width:40%;border-radius: 100px / 50px;padding:10px;background-color: #FFFFFF;">
					<el-form ref="VO" :model="VO" label-width="80px"  style="margin:10px;width:80%;">
			
					<div class="col-sm-4"  style="margin:10px;width:100%;height=100px;">
						<img src="@/assets/logo2.png"  style="margin-left:15%;width:80%;height=100px;"/>
					</div>
					<div class="col-sm-4" style="padding-left: 50px;">
						<el-form-item label="员工编号" prop="ygbh">
							<el-input v-model="VO.ygbh" :placeholder="messagesyhbh"></el-input>
						</el-form-item>
						
						<el-form-item label="登录密码" prop="ygmm">
							<el-input v-model="VO.ygmm" :placeholder="messagesyhmm"></el-input>{{messages}}
						</el-form-item>
						<el-form-item>
							<el-button type="primary" icon="el-icon-news"  @click="login">用户登陆</el-button>
							<el-button type="primary" icon="el-icon-back"  @click="toLogin">重置信息</el-button>
            			</el-form-item>
					</div>
					</el-form>
				</div>
			
			
</div>
  
</template>


<script>

import Api from '@/apis/yonghu9.js'
export default {
  props: ['productData'],
  components: {},
  data () {
    return {
	backgroundDiv: {
	backgroundImage:'url(' + require('@/assets/beijing2.jpg') + ')',
	backgroundSize:'100% 100%'
		},
		     VO: { 
		ygbh: '',
		ygmm: '',
       },
       messagesyhbh:'',
 				messagesyhmm:'',
			 messages:'',
			 qxdj:'',
    }
  },

methods: {
				login(VO) {
					if(this.VO.ygbh==""){
							 this.messagesyhbh ="用户名不能为空";
					}else{
						if(this.VO.ygmm==""){
							 this.messagesyhmm ="用户密码不能为空";
							}else{
							 this.logining();
							};
					};
				},
					//返回编辑页功能		
					logining() {
								 	let VO1 = {
		                            ygbh: this.VO.ygbh,
		                            ygmm: this.VO.ygmm,
		                        }

							Api.login(VO1).then(res => {
                                     console.log(res);
                                        if (res.data==false) {
                                             		this.messages="用户名或密码错误，请重新输入";
                                        } else  if (res.data==true){
			                                        localStorage.setItem("ygbh",VO1.ygbh)
			                                        localStorage.setItem("ygmm",VO1.ygmm)
                                             this.tomenu0();
                                        }
							                                
							}).catch(err => {
                                        
													console.log(err)
	}); 
						},

 						selectById(ygbh){
                        Api.selectById(ygbh).then(res=>{
												this.qxdj=res.data.qxdj;
												if (this.qxdj=='0') {
													this.tomenu0();
												} else 	if (this.qxdj=='1'){
														this.tomenu1();
												} else 	if (this.qxdj=='2'){
														this.tomenu2();
												} else 	if (this.qxdj=='3'){
														this.tomenu3();
												} else 	if (this.qxdj=='4'){
														this.tomenu4();
												}
                            console.log(res);
                        }).catch(err => {
                            console.log(err)
                        });
												},
												


						//返回编辑页功能		
						tomenu0() {
							this.$router.push({
									path: `/menu0`,
								})
						},
						tomenu1() {
							this.$router.push({
									path: `/menu1`,
								})
						},
						tomenu2() {
							this.$router.push({
									path: `/menu2`,
								})
						},
						tomenu3() {
							this.$router.push({
									path: `/menu3`,
								})
						},
						tomenu4() {
							this.$router.push({
									path: `/menu4`,
								})
						},
toLogin() {
			 this.$router.push({
          path: `/Login`,
        })
		},
					


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

