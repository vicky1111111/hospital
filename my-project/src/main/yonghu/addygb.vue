
<!-- 购买就诊卡页面 -->
<template >
	<el-form ref="VO" :model="VO" label-width="80px"  style="margin:20px;width:90%;">
       <el-row :gutter="10">
   
  <el-col :span="12">
 <el-form-item :label="label1" prop="ygbh">
						<el-input v-model="VO.ygbh"></el-input>
				</el-form-item>
				<el-form-item :label="label2" prop="ygxm">
						<el-input v-model="VO.ygxm"></el-input>
				</el-form-item>
				<el-form-item :label="label3" prop="ygxb">
						<el-select v-model="VO.ygxb" placeholder="请选择性别"  style="width:100%;">
								<el-option label="男" value="1"></el-option>
								<el-option label="女" value="0"></el-option>
						</el-select>
				</el-form-item>
				
					<el-form-item :label="label4" prop="ygnl">
							<el-input v-model="VO.ygnl" ></el-input>
					</el-form-item>
					<el-form-item :label="label5" prop="dzyx">
						<el-input v-model="VO.dzyx"></el-input>
					</el-form-item>
					<el-form-item :label="label6" prop="ygdh">
								<el-input v-model="VO.ygdh"></el-input>
					</el-form-item>
    </el-col>
     <el-col :span="12">
			 	 <el-form-item :label="label7" prop="ksbh">
							<el-select v-model="VO.ksbh" placeholder="请选择挂号科室"  style="width:100%;">
				<el-option label="骨科" value="1"></el-option>
				<el-option label="儿科" value="2"></el-option>
				<el-option label="牙科" value="3"></el-option>
				<el-option label="神经外科" value="4"></el-option>
			</el-select>
					
				</el-form-item>
				<el-form-item :label="label8" prop="ygjs">
						<el-input v-model="VO.ygjs"></el-input>
				</el-form-item>
				<el-form-item :label="label9" prop="ygzw">
						<el-input v-model="VO.ygzw"></el-input>
				</el-form-item>
					<el-form-item :label="label10" prop="qxdj">
						   <span style="float:left;">权限等级4</span>
					</el-form-item>
					<el-form-item :label="label11" prop="ygjj">
						<el-input v-model="VO.ygjj"></el-input>
					</el-form-item>
					<el-form-item :label="label12" prop="ygmm">
								<el-input v-model="VO.ygmm"></el-input>
					</el-form-item>
    </el-col>
</el-row>

		<el-form-item>
			 <el-button type="primary" icon="el-icon-news"  @click="insert">添加员工</el-button>
			 <el-button type="primary" icon="el-icon-back"  @click="tolist">取消添加</el-button>
		</el-form-item>
       
	</el-form>
  
</template>
<script>

import Api from '@/apis/yonghu9.js'
export default {
  props: ['productData'],
  components: {},
  data () {
    return {
		 label1:"员工编号",
     label2:"员工姓名",
     label3:"员工性别",
     label4:"员工年龄",
     label5:"电子邮箱",

     label6:"员工电话",
		 label7:"科室编号",
		 label8:"员工角色",
     label9:"员工职位",
     label10:"权限等级",
     label11:"员工简介",
     label12:"员工密码",
      VO: { 
        	ygbh: '',
					ygxm: '',
					ygxb: '',
					ygnl: '',

					dzyx:'',
					ygdh:'',
					ksbh:'',
					ygjs: '',

					ygzw: '',
					qxdj: '4',
					ygjj: '',
					ygmm:'',
       },
    }
  },

  methods: {
		 //新增键功能
		insert(VO) {
			 let VO1 = { 	
							ygbh: this.VO.ygbh,
							ygxm: this.VO.ygxm,
							ygxb: this.VO.ygxb,
							ygnl: this.VO.ygnl,

							dzyx: this.VO.dzyx,
							ygdh: this.VO.ygdh,
							ksbh: this.VO.ksbh,
							ygjs: this.VO.ygjs,

							ygzw: this.VO.ygzw,
							qxdj: this.VO.qxdj,
							ygjj: this.VO.ygjj,
							ygmm: this.VO.ygmm,

                        }
							Api.insert(VO1).then(res => {

								console.log(res);

								this.tolist();
								}).catch(err => {
										console.log(err)
								});
		},
				 //返回编辑页功能		
		tolist() {
			 this.$router.push({
          path: `/ygb`,
        })
		},



	},
	

}


</script>
