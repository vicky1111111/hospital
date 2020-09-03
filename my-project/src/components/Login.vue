<!-- 登陆页面 -->
<template>
	<el-form ref="usersVO" :model="usersVO" label-width="80px"  style="margin:20px;width:60%;">
		
        <el-form-item label="账号" prop="name">
			<el-input v-model="usersVO.name"></el-input>
		</el-form-item>
		
        <el-form-item label="密码" prop="pwd">
			<el-input v-model="usersVO.pwd"></el-input>
		</el-form-item>
		<el-form-item>
			 <el-button type="primary" icon="el-icon-news"  @click="login">用户登陆</el-button>
			 <el-button type="primary" icon="el-icon-back"  @click="toMain">取消登陆</el-button>
		    {{messages}}
		</el-form-item>
	</el-form>
  
</template>


<script>

import Api from '@/apis/usersmanagement.js'
export default {
  props: ['productData'],
  components: {},
  data () {
    return {
		     usersVO: { 
		name: '',
		pwd: '',
       },
       messages:'',
    }
  },

methods: {
				login(usersVO) {
							let usersVO1 = {
                            name: this.usersVO.name,
                            pwd: this.usersVO.pwd,

                        }
							Api.update(usersVO1).then(res => {
                                     console.log(res);
                                    localStorage.setItem("name",usersVO1.name)
                                        localStorage.setItem("pwd",usersVO1.pwd)
                                          this.messages = res.data.name;
                                       
                                        if ( this.messages==this.usersVO.name) {
                                             this.toMain();
                                        } else {
                                             this.tologin();
                                        }
							                                
							}).catch(err => {
							                                        
																											console.log(err)
																											messages='账号或密码错误，请重新输入';
															});
				},
						
								//返回编辑页功能		
						toMain() {
							this.$router.push({
									path: `/Main`,
								})
						},

								tologin() {
							this.$router.push({
									path: `/test1`,
								})
						},

					


},

}
</script>